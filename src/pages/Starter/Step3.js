import React, {useContext} from 'react';
import {MyContainer} from "../../components/Container/Container";
import {Step} from "../../components/Starter/Step";

export const Step3 = () => {


    return (
        <MyContainer
            navbar={false}
            footer={false}
            status={false}
            // statusBar={false}
        >
            <Step
                activeStep={"step_3"}
                stepTitle={"Have Your Offer Ready"}
                buttonText={"Get Started"}
                isLastStep={true}
            />
        </MyContainer>
    )
}
