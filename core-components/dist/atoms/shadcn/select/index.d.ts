export const Root: typeof SelectPrimitive.Root;
import Item from './select-item.svelte';
export const Group: typeof SelectPrimitive.Group;
export const Input: typeof SelectPrimitive.Input;
import Label from './select-label.svelte';
export const Value: typeof SelectPrimitive.Value;
import Content from './select-content.svelte';
import Trigger from './select-trigger.svelte';
import Separator from './select-separator.svelte';
declare const ItemIndicator: typeof SelectPrimitive.ItemIndicator;
import { Select as SelectPrimitive } from 'bits-ui';
export { Item, Label, Content, Trigger, Separator, Root as Select, Item as SelectItem, Group as SelectGroup, Input as SelectInput, Label as SelectLabel, Value as SelectValue, Content as SelectContent, Trigger as SelectTrigger, Separator as SelectSeparator, ItemIndicator as SelectItemIndicator };
