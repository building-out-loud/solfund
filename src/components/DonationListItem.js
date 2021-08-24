import { Avatar, HStack, Text } from "@chakra-ui/react";

function DonationListItem() {
    return (
        <HStack py="14px" px="20px" background="white">
            <Avatar name="Elio Lopes">
            </Avatar>
            <HStack width="100%" justifyContent="space-between">
                <Text variant="bold">Elio Lopes</Text>
                <Text>₹ 45,000</Text>
            </HStack>
        </HStack>
    );
}

export default DonationListItem;