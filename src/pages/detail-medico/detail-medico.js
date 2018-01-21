import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-detail-medico img img': {
    'margin': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 50 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 75 }],
    'height': [{ 'unit': 'px', 'value': 75 }],
    'borderRadius': '75px'
  },
  'page-detail-medico card': {
    'background': 'white',
    'background': 'linear-gradient(to bottom, white, #f0f1f3)',
    'borderRadius': '3px',
    'width': [{ 'unit': '%H', 'value': NaN }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-detail-medico card card-content': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2 }]
  },
  'page-detail-medico card card-content card-message': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  }
});
