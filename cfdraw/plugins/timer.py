from datetime import datetime
from cftool.constants import TIME_FORMAT

from cfdraw import *


class TimerPlugin(IPlugin[TextAreaResponse]):
    @property
    def settings(self) -> IPluginSettings:
        return IPluginSettings(
            w=300,
            h=70,
            type=PluginType.TEXT_AREA,
            nodeConstraint=NodeConstraints.NONE,
            src="https://ailab-huawei-cdn.nolibox.com/upload/images/63c07ca52b2b42ef943bcf04c8e78878.png",
            pivot=PivotType.TOP,
            align="center",
            requireNode=False,
            pluginInfo=ITextAreaPluginInfo(
                updateInterval=1000,
                noLoading=True,
                textAlign=TextAlign.CENTER,
            ),
        )

    def process(self, data: IParsedPluginRequest) -> TextAreaResponse:
        return TextAreaResponse(
            success=True,
            message="",
            data=TextAreaModel(text=datetime.now().strftime(TIME_FORMAT)),
        )


__all__ = [
    "TimerPlugin",
]