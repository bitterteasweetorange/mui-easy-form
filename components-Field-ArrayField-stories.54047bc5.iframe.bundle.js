"use strict";(self.webpackChunkmui_easy_form=self.webpackChunkmui_easy_form||[]).push([[227],{"./src/components/Field/ArrayField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Button/Button.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-hook-form@7.39.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs"),_ArrayField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Field/ArrayField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"ArrayField",component:_ArrayField__WEBPACK_IMPORTED_MODULE_0__.O},Template=()=>{const{reset,handleSubmit,control}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.cI)({mode:"onChange",defaultValues:{array:[{name:{first:"first",last:"last"},age:20}]}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form",{noValidate:!0,onSubmit:handleSubmit((data=>{console.log(data)})),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ArrayField__WEBPACK_IMPORTED_MODULE_0__.O,{maxLength:3,minLength:1,defaultValueForAppend:{name:{first:""},age:30},name:"array",sxFieldGroup:{display:"grid",gap:2,gridTemplateColumns:"repeat(2,1fr)"},control,showPrefix:index=>index+1+"个",fields:[{componentType:"TEXT",name:"name.first",label:"TEXT",required:!0,autoFocus:!0},{componentType:"NUMBER",name:"age",label:"Number",required:!0}]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{sx:{display:"flex",gap:2,marginTop:2},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{color:"secondary",onClick:()=>{reset()},children:"reset"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{type:"submit",children:"submit"})]})]})};Template.displayName="Template";const Default={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Template,{})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <Template></Template>\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Field/ArrayField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ArrayField});var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/.pnpm/@mui+icons-material@5.10.9_@mui+material@5.10.13_@types+react@18.2.8_react@18.2.0/node_modules/@mui/icons-material/AddCircleOutline.js"),_mui_icons_material_DragHandle__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/.pnpm/@mui+icons-material@5.10.9_@mui+material@5.10.13_@types+react@18.2.8_react@18.2.0/node_modules/@mui/icons-material/DragHandle.js"),_mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/@mui+icons-material@5.10.9_@mui+material@5.10.13_@types+react@18.2.8_react@18.2.0/node_modules/@mui/icons-material/RemoveCircleOutline.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Tooltip/Tooltip.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/IconButton/IconButton.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react-beautiful-dnd@13.1.1_react-dom@18.2.0_react@18.2.0/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react-hook-form@7.39.1_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs"),_FieldGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FieldGroup/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function ArrayField(props){const{defaultValueForAppend,maxLength,minLength,showPrefix,sxFieldGroup,name,sx,control}=props,{append,remove,fields,move}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Dq)({name,control}),onDragEnd=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((result=>{result.destination&&result.destination.index!==result.source.index&&move(result.source.index,result.destination.index)}),[]),enableAdd=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>void 0===maxLength||fields.length<maxLength),[fields]),enableDelete=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>void 0===minLength||fields.length>minLength),[fields]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Z5,{onDragEnd,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.bK,{droppableId:"list",children:provided=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{ref:provided.innerRef,...provided.droppableProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{sx,children:fields.map(((field,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__._l,{draggableId:field.id,index,children:provided=>{return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{sx:{display:"flex",gap:4,alignItems:"baseline"},ref:provided.innerRef,...provided.draggableProps,children:[showPrefix?.(index),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FieldGroup__WEBPACK_IMPORTED_MODULE_1__.N,{sx:{...sxFieldGroup},control,fields:(res=props.fields,args={index},"function"==typeof res?res(args):res).map((field=>({...field,name:name+"."+index+"."+field.name})))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{title:enableDelete?"":`min length is ${minLength}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{disabled:!enableDelete,color:"error",onClick:()=>{remove(index)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_8__.Z,{})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{...provided.dragHandleProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_DragHandle__WEBPACK_IMPORTED_MODULE_9__.Z,{})})]});var res,args}},field.id)))}),provided.placeholder]})}),enableAdd&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{onClick:()=>{append(defaultValueForAppend??{})},color:"primary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_10__.Z,{})})]})}ArrayField.displayName="ArrayField";try{ArrayField.displayName="ArrayField",ArrayField.__docgenInfo={description:"",displayName:"ArrayField",props:{sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}},sxFieldGroup:{defaultValue:null,description:"",name:"sxFieldGroup",required:!1,type:{name:"SxProps"}},control:{defaultValue:null,description:"",name:"control",required:!1,type:{name:"Control<T, any>"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"Compute<FieldItemProps<ArrayFieldT>[], { index: number; }>"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},defaultValueForAppend:{defaultValue:null,description:"",name:"defaultValueForAppend",required:!1,type:{name:"{ [x: string]: any; }"}},showPrefix:{defaultValue:null,description:"",name:"showPrefix",required:!1,type:{name:"((index: number) => ReactNode)"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/ArrayField.tsx#ArrayField"]={docgenInfo:ArrayField.__docgenInfo,name:"ArrayField",path:"src/components/Field/ArrayField.tsx#ArrayField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FieldGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>FieldGroup});var Box=__webpack_require__("./node_modules/.pnpm/@mui+material@5.10.13_@emotion+react@11.10.5_@emotion+styled@11.10.5_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/esm/Box/Box.js"),merge=__webpack_require__("./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),EasyFormContext=__webpack_require__("./src/components/EasyFormContext/index.tsx"),CascaderField=(__webpack_require__("./src/components/Field/ArrayField.tsx"),__webpack_require__("./src/components/Field/CascaderField.tsx")),CheckboxField=__webpack_require__("./src/components/Field/CheckboxField.tsx"),CheckboxGroupField=__webpack_require__("./src/components/Field/CheckboxGroupField.tsx"),DateField=__webpack_require__("./src/components/Field/DateField.tsx"),DateTimeField=__webpack_require__("./src/components/Field/DateTimeField.tsx"),NumberField=__webpack_require__("./src/components/Field/NumberField.tsx"),PasswordField=__webpack_require__("./src/components/Field/PasswordField.tsx"),RadioGroupField=__webpack_require__("./src/components/Field/RadioGroupField.tsx"),SelectField=__webpack_require__("./src/components/Field/SelectField.tsx"),SliderField=__webpack_require__("./src/components/Field/SliderField.tsx"),SwitchField=__webpack_require__("./src/components/Field/SwitchField.tsx"),TimeField=__webpack_require__("./src/components/Field/TimeField.tsx"),WordField=__webpack_require__("./src/components/Field/WordField.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function FieldGroup({fields,control,sx}){const easyFormContext=(0,react.useContext)(EasyFormContext.Cf),finalSx=(0,merge.Z)(sx,easyFormContext.FieldGroup?.sx);return(0,jsx_runtime.jsx)(Box.Z,{display:"grid",gap:2,sx:finalSx,children:fields.map(((field,index)=>(0,react.createElement)(FieldItem,{control,...field,key:field.name+index})))})}function FieldItem(props){if(props.condition){const{is,watch,fieldName}=props.condition;if(is(watch(fieldName)))return null}const{componentType,...fieldProps}=props;switch(componentType){case"TEXT":return(0,jsx_runtime.jsx)(WordField.u,{...fieldProps});case"NUMBER":return(0,jsx_runtime.jsx)(NumberField.K,{...fieldProps});case"SWITCH":return(0,jsx_runtime.jsx)(SwitchField.K,{...fieldProps});case"CHECKBOX":return(0,jsx_runtime.jsx)(CheckboxField.j,{...fieldProps});case"RADIO-GROUP":return(0,jsx_runtime.jsx)(RadioGroupField.o,{...fieldProps});case"CHECKBOX-GROUP":return(0,jsx_runtime.jsx)(CheckboxGroupField.c,{...fieldProps});case"SELECT":return(0,jsx_runtime.jsx)(SelectField.m,{...fieldProps});case"DATE":return(0,jsx_runtime.jsx)(DateField.N,{...fieldProps});case"TIME":return(0,jsx_runtime.jsx)(TimeField.k,{...fieldProps});case"DATETIME":return(0,jsx_runtime.jsx)(DateTimeField.l,{...fieldProps});case"PASSWORD":return(0,jsx_runtime.jsx)(PasswordField.Z,{...fieldProps});case"SLIDER":return(0,jsx_runtime.jsx)(SliderField.R,{...fieldProps});case"CASCADER":return(0,jsx_runtime.jsx)(CascaderField.N,{...fieldProps});default:return console.error("componentType not supported yet",componentType),null}}FieldGroup.displayName="FieldGroup";try{FieldGroup.displayName="FieldGroup",FieldGroup.__docgenInfo={description:"",displayName:"FieldGroup",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FieldItemProps<T>[]"}},control:{defaultValue:null,description:"control object provided by invoking useForm, optional when using FormProvider",name:"control",required:!1,type:{name:"Control<T, any>"}},sx:{defaultValue:null,description:'override the "sx" provided by QuickFormProvider',name:"sx",required:!1,type:{name:"SxProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FieldGroup/index.tsx#FieldGroup"]={docgenInfo:FieldGroup.__docgenInfo,name:"FieldGroup",path:"src/components/FieldGroup/index.tsx#FieldGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);