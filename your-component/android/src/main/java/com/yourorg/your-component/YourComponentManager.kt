package com.yourorg.your-component

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class YourComponentManager : SimpleViewManager<YourComponentView>() {
    override fun getName() = "YourComponentView"

    override fun createViewInstance(reactContext: ThemedReactContext): YourComponentView {
        return YourComponentView(reactContext)
    }

    @ReactProp(name = "value")
    fun setValue(view: YourComponentView, value: String) {
        view.setText(value)
    }
}
