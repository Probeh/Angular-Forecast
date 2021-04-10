import { MenuItem } from 'primeng/api';

export interface IMenuEvent {
  item         : MenuItem    ;
  originalEvent: PointerEvent;
}
