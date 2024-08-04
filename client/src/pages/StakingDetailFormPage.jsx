import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const StakingDetailFormPage = (props) => {

    const { register,
        handleSubmit,
        formState: {
            errors
        },
        setValue
    } = useForm();

    const navigate = useNavigate();

    return (
        <div>

        </div>
    );
}

export default StakingDetailFormPage;