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

desc "Deploy to remote origin"
task :deploy => [:check_git] do
  source_branch = 'source-design-merge'
  deploy_branch = 'gh-pages'
  message = "Site updated at #{Time.now.utc}"

  puts "...git pull origin  \"#{source_branch}\""
  system "git pull origin  \"#{source_branch}\""
  puts "...getting latest python docs"
  system "rm -rf _posts/python/html"  or exit!(1)
  system "git clone -b built git@github.com:plotly/plotly.py-docs _posts/python/html"  or exit!(1)
  puts "...generate _site"
  system "jekyll build && git checkout \"#{deploy_branch}\" && git pull origin \"#{deploy_branch}\" && cp -r _site/* . && rm -rf _site/ && touch .nojekyll && git add . && git commit -m \"#{message}\" && git push origin \"#{deploy_branch}\""  or exit!(1)
end

desc "Serve as if deploying"
task :serve => [] do

  puts "...getting latest python docs"
  system "rm -rf _posts/python/html"  or exit!(1)
  system "rm -rf _posts/r/md"  or exit!(1)
  system "git clone -b built git@github.com:plotly/plotly.py-docs _posts/python/html"  or exit!(1)
  system "git clone -b built git@github.com:plotly/plotly.r-docs _posts/r/md"  or exit!(1)
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
