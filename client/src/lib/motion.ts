export const EXPLORE_EVENT = "semanoor-explore";

export function requestExplore(index: number) {
  window.dispatchEvent(new CustomEvent(EXPLORE_EVENT, { detail: index }));
}
