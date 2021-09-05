import { HStack, Avatar, VStack, Text, Box, Tag, Tooltip } from "@chakra-ui/react";
import FundraiseCard from "./FundraiseCard";
import { GoVerified } from "react-icons/go";

function Fundraise({ fundraise }) {
    return (
        <VStack background="white" boxSizing="border-box" _hover={{ background: "#efefef"}}>
            <HStack alignItems="flex-start" padding="20px">
                <Avatar z-index="1" borderRadius="7px" size="sm" name={fundraise.userName}>

                </Avatar>
                <VStack ml="20px !important" alignItems="flex-start">
                    <HStack>
                        <Text fontWeight="600">
                            {fundraise.userName} 
                        </Text>
                        <Tooltip label="Cred Verified" hasArrow placement="top">
                            <span>
                                <GoVerified fill="#000000" />                        
                            </span>
                        </Tooltip>
                        <Tag ml="10px !important" background="#0055f7" color="white" fontFamily="Roboto Mono">
                            {`${fundraise.userAddress.substr(0,5)}...${fundraise.userAddress.substr(-5)}`}
                        </Tag>
                    </HStack>
                    
                    <Text>{fundraise.title}</Text>
                    <Text>
                        {fundraise.summary}
                    </Text>
                    <FundraiseCard fundDetails={{ raised: fundraise.raised, goal: fundraise.goal, daysLeft: fundraise.daysLeft }}/>
                </VStack>
            </HStack>
            <Box alignSelf="flex-start" px="20px">
                <Box marginY="20px">
                    <Text variant="bold">{fundraise.supporters} Supporters</Text>
                    <HStack><Text>Highest: </Text><Text>{fundraise.highest} SOL</Text></HStack>
                    <HStack><Text>From: </Text><Text>{fundraise.highestUser}</Text></HStack>
                </Box>  
            </Box>
        </VStack>
    );
}

export default Fundraise;