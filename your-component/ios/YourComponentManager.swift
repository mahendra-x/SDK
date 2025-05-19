@objc(YourComponentManager)
class YourComponentManager: RCTViewManager {
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView! {
    return YourComponent()
  }
}
