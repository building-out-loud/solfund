import { Avatar, HStack, VStack, Text, Tag } from "@chakra-ui/react";

function ThreadMessage() {
    return (
        <HStack py="14px" px="20px" spacing={4} background="white" alignItems="flex-start">
            <Avatar name="Shrey Keny">

            </Avatar>
            <VStack alignItems="flex-start">
                <HStack>
                    <Text variant="bold">Shrey</Text>
                    <Tag fontFamily="Roboto Mono" background="#0055f7" color="white">EKy...qB1</Tag>
                </HStack>
                <Text>
                If in doubt, 42 is always the answer 💙

                Thank you for accepting my bid :)
                </Text>
            </VStack>
        </HStack>
    );
}

export default ThreadMessage;