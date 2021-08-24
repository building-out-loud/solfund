import { VStack, Text, Heading, HStack, Progress, Button } from "@chakra-ui/react";

function FundraiseCard({ fundDetails }) {
    return (
        <VStack background="white" boxShadow="lg" alignItems="flex-start" border="2px solid #0058f7" spacing={5} width="100%" borderRadius="12px" py="20px" px="10px">
            <HStack alignItems="flex-end">
                <Heading fontSize="25px">₹ {fundDetails.raised}</Heading><Text>raised of ₹ {fundDetails.goal} goal</Text>
            </HStack>
            <Progress value={40} width="100%" borderRadius="12px" colorScheme="brand"  />
            <HStack justifyContent="space-between" width="100%">
                <Heading fontSize="20px">{fundDetails.daysLeft} days left</Heading>
                <Button alignSelf="flex-end">Donate</Button>            
            </HStack>
        </VStack>
    );
}

export default FundraiseCard;