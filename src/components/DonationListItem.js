import { Avatar, HStack, Text, Tag } from "@chakra-ui/react";

function DonationListItem() {
    return (
        <HStack py="14px" px="20px" background="white">
            <Avatar name="Elio Lopes">
            </Avatar>
            <HStack width="100%" justifyContent="space-between">
                <HStack>
                    <Text variant="bold">Elio Lopes</Text>
                    <Tag fontFamily="Roboto Mono" background="#0055f7" color="white">6wk...cgQ</Tag>
                </HStack>
                <Text>12 SOL</Text>
            </HStack>
        </HStack>
    );
}

export default DonationListItem;