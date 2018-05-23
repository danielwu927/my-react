import React, { Component } from 'react';
/*
 ES5的React写法
 */
 class MyComponentDemo extends Component{
   propTypes:{
     name: React.PropTypes.string.isrequired,
   }
   render: function(){
     return React.DOM.span(),
   }

 }
