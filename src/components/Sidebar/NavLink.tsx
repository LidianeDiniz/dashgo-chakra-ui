import { LinkProps as ChaKraLinkProps, Link as ChakraLink, Icon, Text } from "@chakra-ui/react";
import { ElementType } from 'react';
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChaKraLinkProps{
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink ({ icon, children, href, ...rest }: NavLinkProps){
    return(
       <ActiveLink href={href} passHref>
        <ChakraLink display="flex" alignItems="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text marginLeft="4" fontWeight="medium">
              {children}
            </Text>
          </ChakraLink>

       </ActiveLink>
    )
}