def git_clean?
  git_state = `git status 2> /dev/null | tail -n1`
  clean = (git_state =~ /working directory clean/)
end

task :check_git do
  unless git_clean?
    puts "Dirty repo - commit or discard your changes and run deploy again"
    exit 1
  end
end

desc "Deploy to remote origin"
task :deploy => [:check_git] do
  source_branch = 'source'
  deploy_branch = 'gh-pages'
  message = "Site updated at #{Time.now.utc}"

  system "git pull origin  \"#{source_branch}\" && jekyll build && git checkout \"#{deploy_branch}\"  && git pull origin \"#{deploy_branch}\" && shopt -s extglob && rm -r !\(_site|.gitignore\) && cp -r _site/* . && rm -rf _site/ && touch .nojekyll"

  unless git_clean?
    system "git add . && git commit -m \"#{message}\""
    system "git push origin \"#{deploy_branch}\""
    puts "Pushed to origin with commit message: #{message}"
  else
    puts "No changes to deploy - canceled"
  end

  system "git checkout \"#{source_branch}\""
end
