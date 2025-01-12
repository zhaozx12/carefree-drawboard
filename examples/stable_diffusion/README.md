# Stable Diffusion

![Stable Diffusion](../assets/stable-diffusion.png)

This example implements two common Stable Diffusion plugins with `carefree-drawboard` 🎨:
1. Text to Image generation.
2. Image to Image generation.

> See [Details](#Details) for more details!

## Install

This example requires the famous `diffusers` library, which can be installed by:

```bash
pip install --upgrade diffusers[torch]
```

## Run

```bash
cfdraw run
```

> We use `app` as the default entry name. If your script is named other than `app.py` (e.g. `{name}.py`), then run:

```bash
cfdraw run --module {name}
```

## Details

1. We utilized `cache_resource` to avoid re-initializing models every hot-rerun.
   * This is useful when we are focusing on the plugin styles/logic.
   * At production stage, we can call the initialization function at the very beginning to pre-load the models.
2. We used:
   * `follow=False` and `nodeConstraint=NodeConstraints.NONE` for `txt2img` plugin, so it will always be displayed (on the right of the screen).
   * `follow=True` and `nodeConstraint=NodeConstraints.IMAGE` for `img2img` plugin, so it will and only will be displayed when the selected `Node` is an image.

> See [Plugin Positioning](https://github.com/carefree0910/carefree-drawboard/wiki/Plugin-Positioning) for more details.

3. We utilized `register_all_available_plugins` to register all internal plugins.

> Currently there is only one internal plugin: `Meta` plugin, which can show you the `meta` information of a `Node`.

4. If you run image processing consecutively (e.g. first `txt2img` then `img2img`), you will find a `from` field in the `meta` data. This can be used to track the process history of every `Node`.

5. We specified `useModal=True` for these plugins, so they will always popup as a modal.

6. We specified lots of `definitions`, in order to align with the parameters exposed by the `diffusers` library.

> See [`IFieldDefinition`](https://github.com/carefree0910/carefree-drawboard/wiki/PythonHttpFieldsPlugin#ifielddefinition) for more details.

7. We specified `upload_root` to `./` (in `cfconfig.py`), so the images/projects will be saved to the cwd (current working directory).

> Default `upload_root` is `~/.cache/carefree-draw`.
