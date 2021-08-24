import ExpandedFundraise from "./ExpandedFundraise";
import { VStack } from "@chakra-ui/react";
import FundraiseList from "./FundraiseList";

function Feed() {
    return (
        <VStack overflowY="scroll" alignItems="flex-start">
            {/* <ExpandedFundraise /> */}
            <FundraiseList />
        </VStack>
    );
}

export default Feed;