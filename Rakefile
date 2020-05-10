def git_clean?
  git_state = `git status 2> /dev/null | tail -n1`
  clean = (git_state =~ /clean/)
end

task :check_git do
  unless git_clean?
    puts "Dirty repo - commit or discard your changes and run deploy again"
    exit 1
  end
end

desc "Serve as if deploying"
task :serve => [] do

  puts "...getting latest python docs"
  system "rm -rf _posts/python/html _posts/r/md _posts/ggplot2/md"  or exit!(1)
  system "git clone --depth 1 -b built git@github.com:plotly/plotly.py-docs _posts/python/html"  or exit!(1)
  system "git clone --depth 1 -b built git@github.com:plotly/plotly.r-docs _posts/r/md"  or exit!(1)
  system "mv _posts/r/md/ggplot2 _posts/ggplot2/md"  or exit!(1)
  system "jekyll serve"
end

desc "Serve using copy of adjacent py-docs and _config_personal.yml"
task :personal => [] do

  puts "...getting latest python docs"
  system "rm -rf _posts/python/html"  or exit!(1)
  system "cp -r ../plotly.py/doc/build/html _posts/python/html"  or exit!(1)
  system "jekyll serve --config _config_personal.yml"
end
