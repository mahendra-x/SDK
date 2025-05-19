package com.yourorg.your-component

import android.widget.TextView
import com.facebook.react.uimanager.ThemedReactContext

class YourComponentView(context: ThemedReactContext) : TextView(context) {
    fun setText(text: String) {
        this.text = text
    }
}
