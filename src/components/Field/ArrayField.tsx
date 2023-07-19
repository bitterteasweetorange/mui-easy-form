import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { Box, IconButton, SxProps, Tooltip } from '@mui/material'
import { ReactNode, useCallback, useMemo } from 'react'
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd'
import {
  ArrayPath,
  DeepPartial,
  FieldValues,
  Path,
  UseFormReturn,
  useFieldArray,
} from 'react-hook-form'
import { FieldGroup, FieldItemProps } from '../FieldGroup'

type ResFunc<Res, Args> = (args: Args) => Res
type Compute<Res, Args> = Res | ResFunc<Res, Args>

function compute<Res, Args>(res: Compute<Res, Args>, args: Args): Res {
  return typeof res === 'function' ? (res as ResFunc<Res, Args>)(args) : res
}

export type ArrayFieldProps<
  T extends FieldValues,
  ArrayFieldT extends FieldValues,
> = {
  sx?: SxProps
  sxFieldGroup?: SxProps
  control?: UseFormReturn<T>['control']
  fields: Compute<FieldItemProps<ArrayFieldT>[], { index: number }>
  name: ArrayPath<T>
  defaultValueForAppend?: DeepPartial<ArrayFieldT>
  showPrefix?: (index: number) => ReactNode
  maxLength?: number
  minLength?: number
}

export function ArrayField<
  T extends FieldValues,
  ArrayFieldT extends FieldValues,
>(props: ArrayFieldProps<T, ArrayFieldT>) {
  const {
    defaultValueForAppend,
    maxLength,
    minLength,
    showPrefix,
    sxFieldGroup,
    name,
    sx,
    control,
  } = props
  const { append, remove, fields, move } = useFieldArray<T>({
    name,
    control: control,
  })

  const onDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    move(result.source.index, result.destination.index)
  }, [])

  const enableAdd = useMemo(() => {
    return maxLength === undefined || fields.length < maxLength
  }, [fields])

  const enableDelete = useMemo(() => {
    return minLength === undefined || fields.length > minLength
  }, [fields])
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Box sx={sx}>
              {fields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 4,
                        alignItems: 'baseline',
                      }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      {showPrefix?.(index)}
                      <FieldGroup<ArrayFieldT>
                        sx={{
                          ...sxFieldGroup,
                        }}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        control={control as any}
                        fields={compute(props.fields, { index }).map(
                          (field) => ({
                            ...field,
                            name: (name +
                              '.' +
                              index +
                              '.' +
                              field.name) as Path<ArrayFieldT>,
                          }),
                        )}
                      />
                      <Tooltip
                        title={enableDelete ? '' : `min length is ${minLength}`}
                      >
                        <span>
                          <IconButton
                            disabled={!enableDelete}
                            color="error"
                            onClick={() => {
                              remove(index)
                            }}
                          >
                            <RemoveCircleOutlineIcon />
                          </IconButton>
                        </span>
                      </Tooltip>
                      <IconButton {...provided.dragHandleProps}>
                        <DragHandleIcon />
                      </IconButton>
                    </Box>
                  )}
                </Draggable>
              ))}
            </Box>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {enableAdd && (
        <IconButton
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            append(defaultValueForAppend ?? ({} as any))
          }}
          color="primary"
        >
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </IconButton>
      )}
    </DragDropContext>
  )
}
