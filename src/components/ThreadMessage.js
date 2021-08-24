import { Avatar, HStack, VStack, Text } from "@chakra-ui/react";

function ThreadMessage() {
    return (
        <HStack py="14px" px="20px" spacing={4} background="white" alignItems="flex-start">
            <Avatar name="Shrey Keny">

            </Avatar>
            <VStack alignItems="flex-start">
                <Text variant="bold">Shrey</Text>
                <Text>
                If in doubt, 42 is always the answer 💙

                Thank you for accepting my bid :)
                </Text>
            </VStack>
        </HStack>
    );
}

export default ThreadMessage;