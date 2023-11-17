import {
  EasyCascaderBaseNode,
  EasyCascaderInput,
  EasyCascaderInputProps,
} from 'mui-easy-cascader'

export const CascaderIO = EasyCascaderInput
/*
 * CascaderIO let users select a value from a set of assocaiaed values.
 *
 * related components:
 * - CascaderField: a uncontrolled CascaderIO for form
 *
 *  * For more info ,see:
 * https://bitterteasweetorange.github.io/mui-easy-form?path=/docs/io-cascaderio--docs
 **/
export type CascaderIOProps<
  T extends EasyCascaderBaseNode,
  IdAsValue extends boolean = false,
> = EasyCascaderInputProps<T, IdAsValue>
