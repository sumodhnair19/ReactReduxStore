import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {shallow, configure} from 'enzyme';
import {Form} from './components/form';
import  {Loader} from './components/common';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('SubmitButton is clicked', () => {
  const form = shallow(<Form />);
  form.find('form').simulate('submit',{
  preventDefault:()=>{}
  });
});
