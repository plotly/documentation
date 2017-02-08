begin
  require 'terminal-notifier'
  module Jekyll
    class Site
      alias jekyll_process process
      def process
        jekyll_process
        TerminalNotifier.notify('Jekyll rebuild finished.')
      end
    end
  end
rescue LoadError
  # nothing
end
