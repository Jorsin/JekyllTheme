# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekylltheme"
  spec.version       = "0.1.1"
  spec.authors       = ["Jorsin"]
  spec.email         = ["danielbesley0@gmail.com"]

  spec.summary       = "Theme used for the jorsin website"
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
  f.match(%r{^(_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown|html)|$)))}i)
end

  spec.add_runtime_dependency "jekyll"

  spec.add_development_dependency "bundler", "~> 2.0.2"
  spec.add_development_dependency "rake", "~> 12.0"
end