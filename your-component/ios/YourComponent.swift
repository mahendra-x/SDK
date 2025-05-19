@objc(YourComponent)
class YourComponent: UILabel {

  @objc var value: NSString = "" {
    didSet {
      self.text = value as String
    }
  }

  override init(frame: CGRect) {
    super.init(frame: frame)
    self.textColor = .black
  }

  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
}
