import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>)
    })
    
    test('debe de mostrarse correctament', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola mundo";
        input.simulate('change', { target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('NO debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })
    
        expect(setCategories).not.toHaveBeenCalled();

    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola mundo';

        wrapper.find('input').simulate('change', { target:{ value }});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect ( setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
        // Simular el inputChange
// Simular el submit
// SetCategories se debe de haber llamado
// El valor del input debe de estar ''

    })
    
    
    
})
