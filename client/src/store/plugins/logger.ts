import type { PiniaPluginContext } from 'pinia';

export function piniaLogger(ctx: PiniaPluginContext) {
  ctx.store.$onAction(({ name, args }) => {
    console.log(`${ctx.store.$id} action: ${name} and old value is ${args}`);
  });
}
