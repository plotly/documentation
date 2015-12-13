module Jekyll
  module RoundNum
    def round_num(input,digits)
      x = input
      x.round(digits)
    end
  end
end
Liquid::Template.register_filter(Jekyll::RoundNum)