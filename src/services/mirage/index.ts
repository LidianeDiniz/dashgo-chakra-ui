import { faker } from '@faker-js/faker';
import { Factory, Model, Response, createServer } from 'miragejs';
type User ={
    name: string;
    email: string;
    create_at: string;
}

export function makeServer (){
    const server = createServer({
        models:{
            user: Model.extend<Partial<User>>({})
        },

        factories:{
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLocaleLowerCase()
                },
                created_at() {
                    return faker.date.recent({days: 10})
                },
            })
        },

        seeds(server){
            server.createList('user', 200)
        },
        routes(){

            this.namespace ='api';
            this.timing = 750;

            this.get('/users', function(schema, request){
                const {page = 1 , per_page = 10} = request.queryParams
                const total = schema.all('user').length

                const pageSatrt = (Number(page) - 1 ) * Number(per_page)
                const pageEnd = pageSatrt + Number(per_page)

                const users = this.serialize(schema.all('user')).users.slice(pageSatrt, pageEnd)

                return new Response (
                    200,
                    {'x-total-count': String(total)},
                    {users}
                )

            })
            this.post('/users')

            this.namespace = '';
            this.passthrough()
        }
    })

    return server;
}