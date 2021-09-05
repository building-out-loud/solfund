import { VStack, Grid, Box, Text, Input, HStack, Avatar, Textarea, Button } from "@chakra-ui/react";
import { useContext } from "react";
import Fundraise from "./Fundraise";
import { Web3Context } from "./../context/web3context";

function FundraiseList() {
    const { currentAccount } = useContext(Web3Context);

    const fundraises = [
        { 
            userName: "Harpal Jadeja", 
            userAddress: "VRiwtNdvisv2z31KGLhwACT8GUTUDscLsdnRfqATMKo",
            title: "Konkan Flood Relief Fund", 
            summary: "Record-breaking rains in Konkan and surrounding areas have been causing chaos in the region. Due to incessant downpours since last night, many homeless families have been shifted to temporary shelters. As many cities and towns are experiencing one of the worst floods in decades, thousands of people living in low-lying areas and slums are in desperate need of food and other essentials. The amount of damage caused has been unprecedented. Many Roads and buildings have caved in and the affected areas have come to a standstill. We are trying to get food and other essentials to those stranded in Khed, Chiplun, Mahad and surrounding regions because of floods. Let us come forward and play our part to help the suffering brothers and sisters on the platform of Minhaj Interfaith and Welfare Foundation. #KokanFloods #Chiplun #ChiplunFloods", 
            supporters: 255, 
            highest: 12, 
            raised: 37.8,
            goal: 100,
            daysLeft: 14,
            highestUser: "Elio Lopes"
        },
        {
            userName: "Shrey Keny", 
            userAddress: "VRiwtNdvisv2z31KGLhwACT8GUTUDscLsdnRfqATMKo",
            title: "Schooling Special needs Children with Custom Education", 
            summary: "Children with special needs seldom graduate in India. And this is not entirely because of their inability to cope with high school and college. Our educational system uses standardized methods that are ineffective in imparting knowledge and evaluating skills of differentially abled learners. As a nonprofit residential school committed to recognizing talent and skills among special needs students, we place the greatest emphasis on personalised instruction. Coupled with the great level of attention, care and support in a safe and secure environment, our children not just thrive but blossom. The confidence that we help them gain contributes to making them feel independent to live a full life in college and in their workplace. There is an untapped pool of future artists, entrepreneurs, innovators and leaders in this community. We strive to identify such gems and facilitate their learning so that they can make a positive difference in our world.", 
            supporters: 188, 
            highest: 15, 
            raised: 35.4,
            goal: 400,
            daysLeft: 6,
            highestUser: "Mohit Jandwani"
        }
    ]

    return (
        <Grid position="relative" templateColumns="1fr" backgroundColor="#e5e5e5" gridGap="1px">
            <Box borderBottom="1px solid #e5e5e5" position="sticky" top="0" width="100%" z-index="9999" background="white" px="20px" py="20px">
                <Text variant="bold">Home</Text>
            </Box>
            {
                currentAccount ?
                <VStack alignItems="flex-end" padding="20px" background="white">
                    <HStack alignItems="flex-start" width="100%">
                        <Avatar z-index="1" borderRadius="7px" size="sm" />
                        <VStack width="100%">
                            <Input placeholder="Fundraise Title" />
                            <HStack width="100%">
                                <Input placeholder="Fundraise Goal" />
                                <Input type="date" placeholder="Deadline" />
                            </HStack>
                            <Textarea rows="5" width="100%" placeholder="Fundraise Description" />
                        </VStack>
                    </HStack>
                    <Button>Fundraise</Button>
                </VStack>
                :
                null
            }
            <Box>
                {
                    fundraises.map((fundraise) => {
                        return (
                            <Fundraise fundraise={fundraise} />
                        )
                    })
                }
            </Box>
            
        </Grid>
    );
}

export default FundraiseList;
