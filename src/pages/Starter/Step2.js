import React, {useContext} from 'react';
import {MyContainer} from "../../components/Container/Container";
import {Step} from "../../components/Starter/Step";

export const Step2 = () => {


    return (
        <MyContainer
            navbar={false}
            footer={false}
            status={false}
            // statusBar={false}
        >
            <Step
                activeStep={"step_2"}
                stepTitle={"Create Your Voice Recording"}
            />
        </MyContainer>
    )
}
