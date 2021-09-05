import { VStack } from "@chakra-ui/react";
import FundraiseList from "./FundraiseList";
import ExpandedFundraise from "./ExpandedFundraise";

function Feed() {


    return (
        <VStack overflowY="scroll" alignItems="flex-start">
            {/* <ExpandedFundraise /> */}
            <FundraiseList />
        </VStack>
    );
}

export default Feed;