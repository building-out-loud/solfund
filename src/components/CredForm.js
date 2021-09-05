import { Input, VStack, HStack, Text, InputGroup, InputLeftAddon, Button, PinInput, PinInputField } from "@chakra-ui/react";
import { useState } from "react";

function CredForm() {
    const [ step, setStep ] = useState(2);
    return (
        <VStack spacing={5} padding="20px" alignItems="flex-end" width="100%" borderRadius="12px" color="white" background="black">
            <Text color="white" alignSelf="flex-start">Verify With Cred</Text>
            {
                step == 1 ?
                <> 
                    <InputGroup>
                        <InputLeftAddon children="+91" background="black" />
                        <Input  background="white" color="black" placeholder="Phone Number" />            
                    </InputGroup>
                    <Button background="white" color="black">Request OTP</Button>
                </>
                :
                <> 
                    <HStack width="100%" alignSelf="center">
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                    <Button background="white" color="black">Verify</Button>
                </>
            }
            
        </VStack>
    );
}

export default CredForm;