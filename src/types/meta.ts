import type { APISources } from "./requests";

// meta types
export type MetaType = "upload" | "txt2img.sd";

// (global) meta data
export type SDVersions =
  | ""
  | "v1.5"
  | "anime"
  | "anime_anything"
  | "anime_hybrid"
  | "anime_guofeng"
  | "anime_orange"
  | "dreamlike_v1";
export type SDSamplers = "ddim" | "plms" | "klms" | "solver" | "k_euler" | "k_euler_a" | "k_heun";
export interface VariationModel {
  seed: number;
  strength: number;
}
export interface ITomeInfo {
  enable: boolean;
  ratio: number;
  max_downsample: number;
  sx: number;
  sy: number;
  seed: number;
  use_rand: boolean;
  merge_attn: boolean;
  merge_crossattn: boolean;
  merge_mlp: boolean;
}

export interface IMetaData {
  // common api data
  w: number;
  h: number;
  url: string;
  prompt: string;
  negative_prompt: string;
  version: SDVersions;
  sampler: SDSamplers;
  num_steps: number;
  guidance_scale: number;
  seed: number;
  use_circular: boolean;
  max_wh: number;
  clip_skip: number;
  variations: VariationModel[];
  tome_info: Partial<ITomeInfo>;
  source: APISources;
  // specific data
  isDrag: boolean;
  timestamp?: number;
  duration?: number;
}

// meta bundle
export interface IMeta {
  type: MetaType;
  data: IMetaData;
}
export interface IPartialMeta {
  type: IMeta["type"];
  data: Partial<IMeta["data"]>;
}
