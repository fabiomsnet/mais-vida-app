import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-home contaier': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'page-home contaier ul': {
    'listStyle': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  'page-home contaier ul h1': {
    'font': [{ 'unit': 'string', 'value': 'bold' }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'Helvetica,' }, { 'unit': 'string', 'value': 'Verdana,' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'color': '#242424',
    'marginBottom': [{ 'unit': 'px', 'value': -15 }]
  },
  'page-home contaier ul li': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cacaca' }]
  },
  'page-home contaier ul li img': {
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'objectFit': 'cover',
    'width': [{ 'unit': 'px', 'value': 45 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'borderRadius': '45px'
  },
  'page-home contaier ul li button': {
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': -80 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-home contaier ul li p': {
    'font': [{ 'unit': 'px', 'value': 200 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'Georgia,' }, { 'unit': 'string', 'value': 'Times' }, { 'unit': 'string', 'value': 'New' }, { 'unit': 'string', 'value': 'Roman,' }, { 'unit': 'string', 'value': 'serif' }],
    'color': '#3e3e3e'
  },
  'page-home contaier ul li strong': {
    'fontWeight': 'bold'
  }
});
