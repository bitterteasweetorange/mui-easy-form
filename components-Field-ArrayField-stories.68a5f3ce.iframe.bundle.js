"use strict";(self.webpackChunkmui_easy_form=self.webpackChunkmui_easy_form||[]).push([[227],{"./src/components/Field/ArrayField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ArrayField_stories});var Box=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Box/Box.js"),Button=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Button/Button.js"),index_esm=__webpack_require__("./node_modules/.pnpm/react-hook-form@7.39.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs"),AddCircleOutline=__webpack_require__("./node_modules/.pnpm/@mui+icons-material@5.10.9_@mui+material@5.10.13_@types+react@18.2.8_react@18.2.0/node_modules/@mui/icons-material/AddCircleOutline.js"),DragHandle=__webpack_require__("./node_modules/.pnpm/@mui+icons-material@5.10.9_@mui+material@5.10.13_@types+react@18.2.8_react@18.2.0/node_modules/@mui/icons-material/DragHandle.js"),RemoveCircleOutline=__webpack_require__("./node_modules/.pnpm/@mui+icons-material@5.10.9_@mui+material@5.10.13_@types+react@18.2.8_react@18.2.0/node_modules/@mui/icons-material/RemoveCircleOutline.js"),Tooltip=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Tooltip/Tooltip.js"),IconButton=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/IconButton/IconButton.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_beautiful_dnd_esm=__webpack_require__("./node_modules/.pnpm/react-beautiful-dnd@13.1.1_react-dom@18.2.0_react@18.2.0/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"),FieldGroup=__webpack_require__("./src/components/FieldGroup/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function ArrayField(props){const{defaultValueForAppend,maxLength,minLength,showPrefix,sxFieldGroup,name,sx,control}=props,{append,remove,fields,move}=(0,index_esm.Dq)({name,control}),onDragEnd=(0,react.useCallback)((result=>{result.destination&&result.destination.index!==result.source.index&&move(result.source.index,result.destination.index)}),[]),enableAdd=(0,react.useMemo)((()=>void 0===maxLength||fields.length<maxLength),[fields]),enableDelete=(0,react.useMemo)((()=>void 0===minLength||fields.length>minLength),[fields]);return(0,jsx_runtime.jsxs)(react_beautiful_dnd_esm.Z5,{onDragEnd,children:[(0,jsx_runtime.jsx)(react_beautiful_dnd_esm.bK,{droppableId:"list",children:provided=>(0,jsx_runtime.jsxs)("div",{ref:provided.innerRef,...provided.droppableProps,children:[(0,jsx_runtime.jsx)(Box.Z,{sx,children:fields.map(((field,index)=>(0,jsx_runtime.jsx)(react_beautiful_dnd_esm._l,{draggableId:field.id,index,children:provided=>{return(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",gap:4,alignItems:"baseline"},ref:provided.innerRef,...provided.draggableProps,children:[showPrefix?.(index),(0,jsx_runtime.jsx)(FieldGroup.N,{sx:{...sxFieldGroup},control,fields:(res=props.fields,args={index},"function"==typeof res?res(args):res).map((field=>({...field,name:name+"."+index+"."+field.name})))}),(0,jsx_runtime.jsx)(Tooltip.Z,{title:enableDelete?"":`min length is ${minLength}`,children:(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(IconButton.Z,{disabled:!enableDelete,color:"error",onClick:()=>{remove(index)},children:(0,jsx_runtime.jsx)(RemoveCircleOutline.Z,{})})})}),(0,jsx_runtime.jsx)(IconButton.Z,{...provided.dragHandleProps,children:(0,jsx_runtime.jsx)(DragHandle.Z,{})})]});var res,args}},field.id)))}),provided.placeholder]})}),enableAdd&&(0,jsx_runtime.jsx)(IconButton.Z,{onClick:()=>{append(defaultValueForAppend??{})},color:"primary",children:(0,jsx_runtime.jsx)(AddCircleOutline.Z,{})})]})}ArrayField.displayName="ArrayField";try{ArrayField.displayName="ArrayField",ArrayField.__docgenInfo={description:"",displayName:"ArrayField",props:{sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}},sxFieldGroup:{defaultValue:null,description:"",name:"sxFieldGroup",required:!1,type:{name:"SxProps"}},control:{defaultValue:null,description:"",name:"control",required:!1,type:{name:"Control<T, any>"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"Compute<FieldItemProps<ArrayFieldT>[], { index: number; }>"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},defaultValueForAppend:{defaultValue:null,description:"",name:"defaultValueForAppend",required:!1,type:{name:"{ [x: string]: any; }"}},showPrefix:{defaultValue:null,description:"",name:"showPrefix",required:!1,type:{name:"(index: number) => ReactNode"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/ArrayField.tsx#ArrayField"]={docgenInfo:ArrayField.__docgenInfo,name:"ArrayField",path:"src/components/Field/ArrayField.tsx#ArrayField"})}catch(__react_docgen_typescript_loader_error){}const ArrayField_stories={title:"ArrayField",component:ArrayField},Template=()=>{const{reset,handleSubmit,control}=(0,index_esm.cI)({mode:"onChange",defaultValues:{array:[{name:{first:"first",last:"last"},age:20}]}});return(0,jsx_runtime.jsxs)("form",{noValidate:!0,onSubmit:handleSubmit((data=>{console.log(data)})),children:[(0,jsx_runtime.jsx)(ArrayField,{maxLength:3,minLength:1,defaultValueForAppend:{name:{first:""},age:30},name:"array",sxFieldGroup:{display:"grid",gap:2,gridTemplateColumns:"repeat(2,1fr)"},control,showPrefix:index=>index+1+"个",fields:[{componentType:"TEXT",name:"name.first",label:"TEXT",required:!0,autoFocus:!0},{componentType:"NUMBER",name:"age",label:"Number",required:!0}]}),(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",gap:2,marginTop:2},children:[(0,jsx_runtime.jsx)(Button.Z,{color:"secondary",onClick:()=>{reset()},children:"reset"}),(0,jsx_runtime.jsx)(Button.Z,{type:"submit",children:"submit"})]})]})};Template.displayName="Template";const Default={render:()=>(0,jsx_runtime.jsx)(Template,{})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <Template></Template>\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/FieldGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>FieldGroup});var _mui_material__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Box/Box.js"),_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/.pnpm/@mui+x-date-pickers@6.8.0_@emotion+react@11.10.5_@emotion+styled@11.10.5_@mui+base@5.0.0-beta_k66kiwnnulh3mo64aigpuw4ssa/node_modules/@mui/x-date-pickers/DateField/DateField.js"),_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/.pnpm/@mui+x-date-pickers@6.8.0_@emotion+react@11.10.5_@emotion+styled@11.10.5_@mui+base@5.0.0-beta_k66kiwnnulh3mo64aigpuw4ssa/node_modules/@mui/x-date-pickers/TimeField/TimeField.js"),_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/.pnpm/@mui+x-date-pickers@6.8.0_@emotion+react@11.10.5_@emotion+styled@11.10.5_@mui+base@5.0.0-beta_k66kiwnnulh3mo64aigpuw4ssa/node_modules/@mui/x-date-pickers/DateTimeField/DateTimeField.js"),lodash_es__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_EasyFormContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/EasyFormContext/index.tsx"),_Field_CheckboxField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Field/CheckboxField.tsx"),_Field_CheckboxGroupField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Field/CheckboxGroupField.tsx"),_Field_NumberField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Field/NumberField.tsx"),_Field_PasswordField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Field/PasswordField.tsx"),_Field_RadioGroupField__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Field/RadioGroupField.tsx"),_Field_SelectField__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Field/SelectField.tsx"),_Field_SliderField__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Field/SliderField.tsx"),_Field_SwitchField__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Field/SwitchField.tsx"),_Field_TextField__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/Field/TextField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function FieldGroup({fields,control,sx}){const easyFormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_EasyFormContext__WEBPACK_IMPORTED_MODULE_1__.Cf),finalSx=(0,lodash_es__WEBPACK_IMPORTED_MODULE_12__.Z)(sx,easyFormContext.FieldGroup?.sx);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Z,{display:"grid",gap:2,sx:finalSx,children:fields.map(((field,index)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldItem,{control,...field,key:field.name+index})))})}function FieldItem(props){if(props.condition){const{is,watch,fieldName}=props.condition;if(is(watch(fieldName)))return null}const{componentType,...fieldProps}=props;switch(componentType){case"TEXT":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_TextField__WEBPACK_IMPORTED_MODULE_10__.n,{...fieldProps});case"NUMBER":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_NumberField__WEBPACK_IMPORTED_MODULE_4__.K,{...fieldProps});case"SWITCH":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_SwitchField__WEBPACK_IMPORTED_MODULE_9__.K,{...fieldProps});case"CHECKBOX":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_CheckboxField__WEBPACK_IMPORTED_MODULE_2__.j,{...fieldProps});case"RADIO-GROUP":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_RadioGroupField__WEBPACK_IMPORTED_MODULE_6__.o,{...fieldProps});case"CHECKBOX-GROUP":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_CheckboxGroupField__WEBPACK_IMPORTED_MODULE_3__.c,{...fieldProps});case"SELECT":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_SelectField__WEBPACK_IMPORTED_MODULE_7__.m,{...fieldProps});case"DATE":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_14__.N,{...fieldProps});case"TIME":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_15__.k,{...fieldProps});case"DATETIME":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_16__.l,{...fieldProps});case"PASSWORD":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_PasswordField__WEBPACK_IMPORTED_MODULE_5__.Z,{...fieldProps});case"SLIDER":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Field_SliderField__WEBPACK_IMPORTED_MODULE_8__.R,{...fieldProps});default:return console.error("componentType not supported yet",componentType),null}}FieldGroup.displayName="FieldGroup";try{FieldGroup.displayName="FieldGroup",FieldGroup.__docgenInfo={description:"",displayName:"FieldGroup",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldItemProps<T>[]"}},control:{defaultValue:null,description:"control object provided by invoking useForm, optional when using FormProvider",name:"control",required:!1,type:{name:"Control<T, any>"}},sx:{defaultValue:null,description:'override the "sx" provided by QuickFormProvider',name:"sx",required:!1,type:{name:"SxProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FieldGroup/index.tsx#FieldGroup"]={docgenInfo:FieldGroup.__docgenInfo,name:"FieldGroup",path:"src/components/FieldGroup/index.tsx#FieldGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);