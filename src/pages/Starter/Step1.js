import React, {useContext} from 'react';
import {MyContainer} from "../../components/Container/Container";
import {Step} from "../../components/Starter/Step";

export const Step1 = () => {


    return (
        <MyContainer
            navbar={false}
            footer={false}
            status={false}
            // statusBar={false}
        >
            <Step
                activeStep={"step_1"}
                stepTitle={"Don't Waste Time with Paperwork"}
            />
        </MyContainer>
    )
}
