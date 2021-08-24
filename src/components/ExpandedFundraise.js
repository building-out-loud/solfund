import Fundraise from "./Fundraise";
import ThreadMessage from "./ThreadMessage";
import DonationListItem from "./DonationListItem";
import { VStack, Text, Box, Heading, Tabs, TabList, Tab, HStack, TabPanels, TabPanel, Grid } from "@chakra-ui/react";


function ExpandedFundraise() {

    const fundraise = {
        userName: "Harpal Jadeja", 
        userAddress: "VRiwtNdvisv2z31KGLhwACT8GUTUDscLsdnRfqATMKo",
        title: "Konkan Flood Relief Fund", 
        summary: "Record-breaking rains in Konkan and surrounding areas have been causing chaos in the region. Due to incessant downpours since last night, many homeless families have been shifted to temporary shelters. As many cities and towns are experiencing one of the worst floods in decades, thousands of people living in low-lying areas and slums are in desperate need of food and other essentials. The amount of damage caused has been unprecedented. Many Roads and buildings have caved in and the affected areas have come to a standstill. We are trying to get food and other essentials to those stranded in Khed, Chiplun, Mahad and surrounding regions because of floods. Let us come forward and play our part to help the suffering brothers and sisters on the platform of Minhaj Interfaith and Welfare Foundation. #KokanFloods #Chiplun #ChiplunFloods", 
        supporters: 255, 
        highest: 45000, 
        raised: 483024,
        goal: 1000000,
        daysLeft: 14,
        highestUser: "Elio Lopes"
    }

    return (
        <VStack position="relative">
            <Box borderBottom="1px solid #e5e5e5" position="sticky" top="0" width="100%" z-index="9999" background="white" px="20px" py="20px">
                <Text fontWeight="600">{fundraise.userName.split(" ")[0]}'s Fundraise</Text>
            </Box>
            <Box borderBottom="1px solid #e5e5e5" mt="0 !important" borderLeft="5px solid #0058f7">
                <VStack>
                    <Fundraise fundraise={fundraise} />
                </VStack>
            </Box>
            <Tabs width="100%">
                <TabList px="20px">
                    <Tab>Thread</Tab>
                    <Tab>Donations</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid background="#e5e5e5" gridGap="1px" templateColumns="1fr">
                            <ThreadMessage />
                            <ThreadMessage />
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <Grid background="#e5e5e5" gridGap="1px" templateColumns="1fr">
                            <DonationListItem />
                            <DonationListItem />
                        </Grid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
}

export default ExpandedFundraise;