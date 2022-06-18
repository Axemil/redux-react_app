// у импортов есть своя расстановка приоритетов
// не путай кавычки
import React from 'react';
import Select from "../UI/select/Select";
import Input from "../UI/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setSelectSort} from "../../redux/reducers/selectSortSlice";
import {setSearch} from "../../redux/reducers/searchSlice";

const PostFilterBlock = () => {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search.value)
    // такие вещи закидывают в константы, у тебя должна быть специальная директория для такого
    const options = [
        {
            value: 'title',
            text: 'Сортивка по заголовку'
        },
        {
            value: 'body',
            text: 'Сортивка по тексту'
        }
    ]
    const selectHandler = value => dispatch(setSelectSort(value))
    const searchHandler = event => dispatch(setSearch(event.target.value))
    return (
        <div className="PostFilter">
            <Select changeHandler={selectHandler} options={options}/>
            <Input onChange={searchHandler}
                   value={search}
                   type="text"
                   placeholder={"Поиск поста по заголовку"}/>
        </div>
    );
};

export default PostFilterBlock;
