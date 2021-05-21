import React, { useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};



function PostFiltersForm(props) {
    const {onSubmit}= props;
    const [searchTerm, setSearchTerm] = useState('');
    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value) //Cập nhật giá trị search trong input

        if(!onSubmit) return;
        const formValues = {
            searchTerm: e.target.value,
        }
        onSubmit(formValues) //Submit giá trị trong form
    }
    return (
        <div>
            <form action="">
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={handleSearchTermChange} //Mỗi lần thay đổi thì cập nhật searchTerm
                />
            </form>
        </div>
    );
}

export default PostFiltersForm;