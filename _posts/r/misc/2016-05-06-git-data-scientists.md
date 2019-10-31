---
name: GitHub for Data Scientists without the Terminal
permalink: r/github-getting-started-for-data-scientists/
description: Introduction to GitHub for Data Scientists without the Terminal
layout: base
language: r
thumbnail: thumbnail/gitgithub.jpg
output:
  html_document:
    keep_md: true
---



## GitHub for Data Scientists without the terminal


by [Sahir Bhatnagar](http://sahirbhatnagar.com/)


## Introduction

In this tutorial you will learn how to get started with version control using
[Git](https://git-scm.com/) and [GitHub](https://github.com/). The main goal
here is to provide a step-by-step introduction to GitHub, with detailed
screenshots, so that you become familiar with its main functionalities.

### Who

This tutorial is intended for grad students and academics who use
[`R`](https://cran.r-project.org/) but are unfamiliar with the _command line_
or _terminal_. I assume nothing about the computer science skills of the user, but do
assume basic knowledge of `R` and `RStudio`.

### What

The outline is provided below. You will learn the essential
concepts and terminology of version control, Git, GitHub and GitHub desktop. This
tutorial follows a _learn-by-doing_ approach.

1. Installing Git
2. Signup for a GitHub account and a Hello World tutorial
3. Installing GitHub Desktop
4. Version control `R` code using an example of PCA
5. Create a branch, pull request and merge
6. Introduction to Git functionality in RStudio
7. Create and publish an `R Markdown` document
8. Create an online CV


### Why

Familiarity with GitHub has become an indispensible tool for anyone working
with data. Sharing code, writing software for your statistical method,
producing techincal reports and creating websites have become essential
skills to have in the rapidly growing field of data science.
Other answers can be found
[here](https://www.quora.com/Should-I-learn-Git-when-I-just-start-programming),
[here](http://stackoverflow.com/questions/2658/getting-started-with-version-control)
and [here](http://stat545.com/git01_git-install.html#but-first-why).

### How

Each of the topics covered are separated by chapters that should be followed
sequentially. Within each chapter, there are a series of steps that you need
to complete. Each step starts with some instructions followed by a screenshot.

### Pre-requisites

Chapters 1-3 have no pre-requisites in terms of software. Chapters 4-8 require a working
installation of [`R`](https://cran.r-project.org/) and
[`RStudio`](https://www.rstudio.com/products/rstudio/download/preview/).

### What this isn't

It is _not_ a comprehensive tutorial of all the intracacies of Git. I skip over
many fine details, because the main goal of this tutorial is an introduction
to essential concepts and terminology of version control, Git, and GitHub.

It covers a variety of topics that could each be its own book. There are a plethora of
online resources available for everything covered here but you can't Google something
if you don't know what you're looking for in the first place.


### Related Work

There are several more advanced and comprehensive online resources available for
learning git and github for data science oriented people including:

1. [Stat 545 at UBC by Jenny Bryan](http://stat545.com/git00_index.html)
2. [Advanced R by Hadley Wickham](http://r-pkgs.had.co.nz/git.html)

The main difference here is that we don't use the terminal (or command line) and
provide screenshots for every step.

*************
*************
*************

## Chapter 1: Installing Git

*************



Git is to GitHub, what R is to RStudio. In other words Git is the software that
does all the work behind the scenes, and GitHub a user interface that makes its
easier to communicate with Git (and adds functionality as well). In this chapter
we will download and install Git.

_Note: the screenshots provided here are from a Windows operating system, however it will be similar on a Mac or Linux._

*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************


### Step 1.1


[Download Git](https://git-scm.com/downloads)

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit1.png)

*************
*************
*************
*************
*************

### Step 1.2

Once the download has completed, click on the `Git-2.7.4 64-bit.exe` file
(`.dmg` on a Mac, or `.deb` on Linux). _Note: the version you download might be different than what I've shown here, but that's ok_

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit2.png)

*************
*************
*************
*************
*************

### Step 1.3

Once you have read the GNU General Public License (this is not required
to continue) click on `Next`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit3.png)

*************
*************
*************
*************
*************

### Step 1.4

You need to select where you want Git installed. I have chosen the default
location `Program Files`, but you can change this if you like by clicking on
the `Browse...` button. Once you have chosen a location click `Next`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit4.png)

*************
*************
*************
*************
*************

### Step 1.5

Select the components you want to install. Ensure that at least the boxes
shown in the screenshot below have been checked. Click `Next`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit5.png)

*************
*************
*************
*************
*************

### Step 1.6

This step is to select where you want the shortcut location to be stored. I
have chosen the default. Then click `Next`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit6.png)

*************
*************
*************
*************
*************

### Step 1.7

Git can be used from the command line also. Selecting the second option allows
you this flexibility for when you become familiar with Git.
_Note: you might see different options on a Mac, if you don't know which option to choose, select the default_

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit7.png)

*************
*************
*************
*************
*************

### Step 1.8

Select the (recommended) first option and click `Next`.
_Note: you might see different options on a Mac, if you don't know which option to choose, select the default_

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit8.png)

*************
*************
*************
*************
*************

### Step 1.9

Select the (recommended) first option and click `Next`.
_Note: you might see different options on a Mac, if you don't know which option to choose, select the default_

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit9.png)

*************
*************
*************
*************
*************

### Step 1.10

Ensure that at least the `Enable Git Credential Manager` box is checked, and click `Next`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit10.png)

*************
*************
*************
*************
*************

### Step 1.11

You should see now see the following installation screen.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit11.png)

*************
*************
*************
*************
*************

### Step 1.12

The following screen will appear once the Git setup has successfully completed.
Click on `Finish`. Well done, you have installed Git on your system. Proceed
to Chapter 2 to signup for a GitHub account.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/installgit/installgit12.png)

*************
*************
*************
*************
*************


## Chapter 2: Signup for a GitHub account and a Hello World tutorial

*************



In this short Chapter, you will signup for a GitHub account. GitHub is like
your online portfolio of code. It has a plethora of great features for creating
websites, project pages and collaborating with others. Again GitHub is an
interface to the version control system called Git. Other options
include [Bitbucket](https://bitbucket.org/) and [GitLab](https://about.gitlab.com/).


*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************


### Step 2.1

Go to [https://github.com/](https://github.com/).

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/signup/signup1.png)

*************
*************
*************
*************
*************

### Step 2.2

The longest step in this chapter is choosing your username. Think about it
carefully and ensure that its professional; it will be how you are recognized on the internet, i.e., your github website address will be github.com/username. Once you have chosen a username, enter a valid email address and password, and click on the `Sign up for GitHub` button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/signup/signup2.png)

*************
*************
*************
*************
*************

### Step 2.3

Choose the free plan (default) and click on the `Finish sign up` button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/signup/signup3.png)

*************
*************
*************
*************
*************

### Step 2.4

Well done. You now have a GitHub account. Complete the `Hello World` guide
which will walk you through some functionalities of GitHub. Click on
the `Let's get started!` button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/signup/signup4.png)

*************
*************
*************
*************
*************

### Step 2.5

Complete the exercises in the Hello World tutorial and move on to Chapter 3: Installing GitHub Desktop.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/signup/signup5.png)

*************
*************
*************
*************
*************

## Chapter 3: Installing GitHub Desktop

*************



Traditionally, version control with Git is accessed through the command line or
terminal. GitHub Desktop is a software program that makes it easier to use Git
functions without having to use the command line. It also allows you to
communicate with your GitHub website (github.com/username). Don't worry if the
differences between Git, GitHub and GitHub Desktop are not clear to you yet.
You will have a better understanding once you have completed this tutorial.

_Note: in all the screenshots that follow, my username is shown, however you should be entering your username, password and email address created in Chapter 2._

*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************

### Step 3.1

Go to [https://desktop.github.com/](https://desktop.github.com/) and click
on `Download GitHub Desktop`.
_Note: GitHub desktop is only available for Windows and Mac. If you are running Linux I recommend [GitKraken](https://www.gitkraken.com/)._

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop1.png)

*************
*************
*************
*************
*************


### Step 3.2

Once the program has finished downloading, click on `GitHubSetup.exe` (or `.dmg` on a Mac).

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop2.png)

*************
*************
*************
*************
*************


### Step 3.3

Click on `Install`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop3.png)

*************
*************
*************
*************
*************


### Step 3.4

You should see this installation screen.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop4.png)

*************
*************
*************
*************
*************


### Step 3.5

Once installed, open up the program and login using the GitHub username and
password you created in Chapter 2 and click on `Log in`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop5.png)

*************
*************
*************
*************
*************


### Step 3.6

This information is used to identify the person that made the changes to your
code. Leave the default values and click on `Continue`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop6.png)

*************
*************
*************
*************
*************


### Step 3.7

You should see this screen, since you haven't created any local repositories yet.

> What is a repository? The purpose of Git is to manage a project, or a set of files, as they change over time. Git stores this information in a data structure called a repository ([reference](https://www.sbf5.com/~cduan/technical/git/git-1.shtml)).

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop7.png)

*************
*************
*************
*************
*************


### Step 3.8

You should now be at this screen.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop8.png)

*************
*************
*************
*************
*************


### Step 3.9

Click on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode0.png" alt="Drawing" style="width: 50px;"/> button in the top left corner. Your username should appear
with a list of your repositories that are currently saved in your online GitHub
account. To be able to have a local copy of this repository (by local I mean on
your computer hard drive) click on the `Clone` tab and then
the `Clone hello-world` button (I am assuming that you completed the `Hello World`
tutorial in Step 5 of Chapter 2).

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop9.png)

*************
*************
*************
*************
*************


### Step 3.10

Choose where you want to save a local copy of the `Hello World` repository and click `OK`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop10.png)

*************
*************
*************
*************
*************


### Step 3.11

You should now see the following contents in your GitHub desktop program.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop11.png)

*************
*************
*************
*************
*************


### Step 3.12

Using your computer's file explorer (e.g. windows explorer or mac finder),
locate the local GitHub repository. If you successfully cloned your repository
you will see a `hello-world` folder with a `README.md` file in it, which is
the same one you created during the `Hello World` exercise in Chapter 2.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop12.png)

*************
*************
*************
*************
*************


### Step 3.13

Before moving on to Chapter 4, verify that the GitHub Desktop has added an
SSH key for you. An SSH key is used to establish a secure connection between
your computer and the online GitHub server. On the far top right hand side of
your online GitHub account click on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop0.png" alt="Drawing" style="width: 50px;"/> icon and navigate to `Settings`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop14.png)

*************
*************
*************
*************
*************


### Step 3.14

You should see one entry in the `SSH keys` panel. Well done. You are now ready
to version control some `R` code in Chapter 4.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/desktop/desktop15.png)

*************
*************
*************
*************
*************


## Chapter 4: Version control R code using an example of PCA

*************



In this chapter we will learn how to version control `R` code using an example
of Principal Component Analysis.

*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************

### Step 4.1

Create a local (meaning on your computer) repository by clickling the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode0.png" alt="Drawing" style="width: 50px;"/>
button in the top left corner of GitHub Desktop, and select the `Create` tab.
Name the repository `pcaCars` and select where you want this repository stored
on your computer. Leave the `Git ignore` value at its default (we will ignore what
this is for now). Click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode0000.png" alt="Drawing" style="width: 125px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode1.png)

*************
*************
*************
*************
*************


### Step 4.2

You should see the following in your GitHub Desktop. A repository called
`pcaCars` has been created locally on your computer, and it contains two
text files that were automatically created by the software. You can click on them
to see their contents. The most important of the two is the `.gitignore` file.
This text file allows you to control what you want to version control within the
`pcaCars` repository.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode2.png)

*************
*************
*************
*************
*************


### Step 4.3

We now want to publish this repository to the remote (i.e. github.com/username).
Simply click on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode00.png" alt="Drawing" style="width: 75px;"/>
button in the top right hand corner. Add a description
and click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode000.png" alt="Drawing" style="width: 125px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode3.png)

*************
*************
*************
*************
*************


### Step 4.4

Head over to your online github account (e.g. [https://github.com/git4ds](https://github.com/git4ds)).
You should see the `pcaCars` repository along with the description you entered in the
previous step.


*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode4.png)

*************
*************
*************
*************
*************


### Step 4.5

Click on the `pcaCars` repository and you will see the `.gitattributes` and
`.gitignore` files which are the same ones you have in your local repository.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode5.png)

*************
*************
*************
*************
*************


### Step 4.6

Open RStudio, navigate to the `pcaCars` repository and set it as your working
directory using the `setwd()` function

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode6.png)

*************
*************
*************
*************
*************


### Step 4.7

Save the following code in an R script called `pca.R`


```r
# cor = TRUE indicates that PCA is performed on
# standardized data (mean = 0, variance = 1)
pcaCars <- princomp(mtcars, cor = TRUE)

# view objects stored in pcaCars
names(pcaCars)

# proportion of variance explained
summary(pcaCars)

# scree plot
plot(pcaCars, type = "l")
```


*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode7.png)

*************
*************
*************
*************
*************


### Step 4.8

Go back to GitHub Desktop. You will see the `pca.R` file appear. Click on the
checkbox to the left of it, and you will see all the additions you have made
to the file.


*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode8.png)

*************
*************
*************
*************
*************


### Step 4.9

On the bottom left hand side, enter a summary of the changes you have made to
the repository and an (optional) description. Then click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode00000.png" alt="Drawing" style="width: 125px;"/>.
This is essentially telling Git to record the changes you have made and store them
in a branch. We will learn about branches in Chapter 5.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode9.png)

*************
*************
*************
*************
*************


### Step 4.10

You should see the following screen. You should notice that in the rectangular
black box, underneath the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode000000.png" alt="Drawing" style="width: 75px;"/>
button,
a timeline. As you commit additional changes, this timeline will grow. Each circle represents
a snapshot of the repository at the time of the commit. This is the power of version controlling with
Git. You can see what changes you have made, and even revert back to snapshot you want.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode10.png)

*************
*************
*************
*************
*************


### Step 4.11

Go to the `pcaCars` repository in your online GitHub account. Do you see the
file you just created called `pca.R` ? _Why not?_ Because the commit you made was local
to your computer. In order to see these changes online, you must `push` your local
changes to the `remote`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode11.png)

*************
*************
*************
*************
*************


### Step 4.12

Go to GitHub Desktop and click on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode000000.png" alt="Drawing" style="width: 75px;"/>
button in the top right hand corner.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode12.png)

*************
*************
*************
*************
*************


### Step 4.13

You should now see your local changes _pushed_ to your online repository.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode13.png)

*************
*************
*************
*************
*************


### Step 4.14

Let's make a change to the `pca.R` script. Instead of a scree plot, we want
a bar plot of the variance explained for each component:


```r
# bar plot
plot(pcaCars)
```

Your script should now match what is shown in the screenshot below.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode14.png)

*************
*************
*************
*************
*************

### Step 4.15

Go to GitHub Desktop and click on the `pca.R` file. You will see that
Git automatically recognizes the changes you have made. Highlighted in red
is what has been removed from the file, and in green is what was added.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode15.png)

*************
*************
*************
*************
*************

### Step 4.16

Describe the change you have made and click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode00000.png" alt="Drawing" style="width: 125px;"/>

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode16.png)

*************
*************
*************
*************
*************

### Step 4.17

_Push_ your local changes to the remote repository by clicking on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode000000.png" alt="Drawing" style="width: 75px;"/>
button. You can view the different commits you have made in GitHub Desktop by clicking on
the grey circles in the timeline located in the rectangular black box.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode17.png)

*************
*************
*************
*************
*************

### Step 4.18

Go to your GitHub account online to see that the changes have been updated. Click on the `History` button located in <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode0000000.png" alt="Drawing" style="width: 150px;"/> to see a list of commits you have made to the repository.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode18.png)

*************
*************
*************
*************
*************

### Step 4.19

The `History` of commits you have made to the repository.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode19.png)

*************
*************
*************
*************
*************


## Chapter 5: Create a branch, pull request and merge

*************



In this chapter you will learn what the words `branch`, `pull request` and `merge` mean
in the GitHub world. _Branching_ is a much more efficient and safe alternative to
having files in a project like this:

1. pcaCars_v1.R
2. pcaCars_v2_hierarchical_clustering_Sept_2015.R
3. pcaCars_v3_bayesian_clustering_not_working.R

This image ([source](https://confluence.atlassian.com/bitbucket/use-a-git-branch-to-merge-a-file-681902555.html))nicely summarises what _branching_ is useful for:

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch0.png)

*************

When you have a new idea, or want to test out some existing method but don't want to
modify your working script, then creating a branch is what you should do.

> A branch represents an independent line of development. You can think of
them as a way to request a brand new working directory ([reference](https://www.atlassian.com/git/tutorials/using-branches)).

*************
*************
*************

### Step 5.1

Click on the branch symbol <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch00.png" alt="Drawing" style="width: 25px;"/> and
name the branch `clustering`. The `From branch` entry indicates what the starting point of the `clustering`
branch should be (you will see what this means shortly). Since there are no other branches
present, `master` is chosen by default. Click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch000.png" alt="Drawing" style="width: 150px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch1.png)

*************
*************
*************
*************
*************


### Step 5.2

You have now switched to the `clustering` branch. Notice the second timeline
labelled `clustering` underneath the `master` in the black rectangular box.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch2.png)

*************
*************
*************
*************
*************


### Step 5.3

You will also see a list of branches in this repository in the dropdown list
next to the branch symbol <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch00.png" alt="Drawing" style="width: 25px;"/>.
The checkmark indicates the branch you are currently on.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch3.png)

*************
*************
*************
*************
*************


### Step 5.4

The motivation for creating this branch is that we want test out some code
to cluster the cars based on principal component scores. Go to RStudio and add
the following code to `pca.R` and save the file. You will need to install the
[`ggplot2`](https://cran.r-project.org/web/packages/ggplot2/) and
[`ggrepel`](https://cran.r-project.org/web/packages/ggrepel/index.html) packages from CRAN


```r
# cluster cars
carsHC <- hclust(dist(pcaCars$scores), method = "ward.D2")

# dendrogram
plot(carsHC)

# cut the dendrogram into 3 clusters
carsClusters <- cutree(carsHC, k = 3)

# add cluster to data frame of scores
carsDf <- data.frame(pcaCars$scores, "cluster" = factor(carsClusters))
str(carsDf)

# plot the first 2 PCs with cluster membership
# need to install ggplot2 and ggrepel packages first
# using the following command in R:
# install.packages(c("ggplot2","ggrepel"))
library(ggplot2)
library(ggrepel)
ggplot(carsDf,aes(x=Comp.1, y=Comp.2)) +
  geom_text_repel(aes(label = rownames(carsDf))) +
  theme_classic() +
  geom_hline(yintercept = 0, color = "gray70") +
  geom_vline(xintercept = 0, color = "gray70") +
  geom_point(aes(color = cluster), alpha = 0.55, size = 3) +
  xlab("PC1") +
  ylab("PC2") +
  xlim(-5, 6) +
  ggtitle("PCA plot of Cars")
```


*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch4.png)

*************
*************
*************
*************
*************


### Step 5.5

Go to GitHub Desktop, click on the `pca.R` file and you will see the changes made
have been highlighted. Describe the changes you have made and then click on
<img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch0000.png" alt="Drawing" style="width: 150px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch5.png)

*************
*************
*************
*************
*************


### Step 5.6

_Push_ your local change to your online GitHub repository (i.e. the _remote_)
by clicking on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv_publish.png" alt="Drawing" style="width: 100px;"/> button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch6.png)

*************
*************
*************
*************
*************


### Step 5.7

You will see the `clustering` branch appear in the `Branch` dropdown menu.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch7.png)

*************
*************
*************
*************
*************


### Step 5.8

Select the `clustering` branch and confirm that your changes to the `pca.R` script
are there.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch8.png)

*************
*************
*************
*************
*************


### Step 5.9

Switch back to the `master` branch. _Why isn't the clutering code there?_ Because
you _commit_ your changes to the `clustering` branch and _not_ the `master` branch.
It should become a little more clear now what _branching_ is and it's utility.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch9.png)

*************
*************
*************
*************
*************


### Step 5.10

If you're content with the clustering results, it's time to merge the clustering code
which is sitting on the `clustering` branch with the PCA code on the `master` branch.
This is accomplished via a `pull request`. A `pull request` is the first step in merging two branches.
It tells GitHub that you have committed changes to the repository and allows you to review the changes.
_Note: `pull requests` are a GitHub functionality and is not part of Git._

************

Click on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch00000.png" alt="Drawing" style="width: 150px;"/> button in GitHub Desktop, enter a summary and description
of the proposed changes and why you did them. Then click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch000000.png" alt="Drawing" style="width: 150px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch10.png)

*************
*************
*************
*************
*************


### Step 5.11

Click on `View it on GitHub`. This will open the submitted `pull request` in the
`pcaCars` repository of your online GitHub account.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch11.png)

*************
*************
*************
*************
*************


### Step 5.12

GitHub will automatically check that the merge can be completed without any
conflicts. If there are no conflicts you will see the following screen. Click on
<img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch0000000.png" alt="Drawing" style="width: 150px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch12.png)

*************
*************
*************
*************
*************


### Step 5.13

Enter a comment about the pull request (optional) and click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch00000000.png" alt="Drawing" style="width: 150px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch13.png)

*************
*************
*************
*************
*************


### Step 5.14

Well done. You have successfully created a _branch_, submitted a _pull request_ and
_merged_ your changes from the `clustering` branch to the `master` branch. You can
delete the `clustering` branch by clicking on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch_delete.png" alt="Drawing" style="width: 120px;"/> as it is no longer needed because these changes
are now in the `master` branch.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch14.png)

*************
*************
*************
*************
*************

### Step 5.15

In the `Branch` dropdown list you will only see the `master` branch. You will
also notice that the clustering code has been merged with the PCA code.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch15.png)

*************
*************
*************
*************
*************

### Step 5.16

The _merge_ was done online. We now want to see these changes reflected on our
computer (i.e. _locally_). To do this, go to GitHub Desktop and click on
the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode000000.png" alt="Drawing" style="width: 75px;"/> button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch16.png)

*************
*************
*************
*************
*************

### Step 5.17

Notice that the `clustering` branch still exists even though you delete it
in your online GitHub repository. _Why?_ Because you did not delete the branch
locally (i.e. it still exists on your computer). Click on the settings dropdown menu
and select `Delete clustering...`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch17.png)

*************
*************
*************
*************
*************

### Step 5.18

You will now only see the master branch in both the dropdown list and the black
rectangular box.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch18.png)

*************
*************
*************
*************
*************



## Chapter 6: Introduction to Git functionality in Rstudio

*************



RStudio also has the ability to interact with Git and GitHub, similar to
GitHub Desktop. I will briefly show how to initiate this by creating an
`RStudio project`. More comprehensive resources can be found
[here](http://www.datasurg.net/2015/07/13/rstudio-and-github/) and
[here](http://r-pkgs.had.co.nz/git.html).

*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************

### Step 6.1

In RStudio go to `File -> New Project ...`

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit1.png)

*************
*************
*************
*************
*************


### Step 6.2

Choose the second option: `Existing Directory` and select the folder which
contains the `pcaCars` repository.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit2.png)

*************
*************
*************
*************
*************


### Step 6.3

Notice the `Git` tab in <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit0.png" alt="Drawing" style="width: 150px;"/> located in the top right panel. It is empty
because no changes have been made to the repositor.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit3.png)

*************
*************
*************
*************
*************


### Step 6.4

We don't want to version control the files associated with the RStudio project.
Open the `.gitignore` file

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit4.png)

*************
*************
*************
*************
*************


### Step 6.5

Add the names of these files in the `.gitignore` text file as shown in the
screenshot below and save the file.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit5.png)

*************
*************
*************
*************
*************


### Step 6.6

In the `Git` tab you will now notice the `.gitignore` file has appeared because
you have made changes to it.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit6.png)

*************
*************
*************
*************
*************


### Step 6.7

You will also notice these changes in GitHub Desktop.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit7.png)

*************
*************
*************
*************
*************


### Step 6.8

Describe the commit and click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode00000.png" alt="Drawing" style="width: 150px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit8.png)

*************
*************
*************
*************
*************


### Step 6.9

`Sync` the _local_ repository with the _remote_ by clicking on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode000000.png" alt="Drawing" style="width: 75px;"/> button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit9.png)

*************
*************
*************
*************
*************


### Step 6.10

RStudio can also handle _branches_. To see this, click on the branch symbol
<img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch00.png" alt="Drawing" style="width: 25px;"/>, and create
a branch called `gh-pages`. To do this, enter `gh-pages` in the Name field and click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch000.png" alt="Drawing" style="width: 125px;"/>

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit10.png)

*************
*************
*************
*************
*************


### Step 6.11

In RStudio you should see a dropdown list of branches in the top right hand
corner of the `Git` panel. You should now be in the `gh-pages` branch for Chapter 7.
_Note: this branch must be called `gh-pages`; you will find out why in the next chapter_

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rstudiogit/rstudiogit11.png)

*************
*************
*************
*************
*************



## Chapter 7: Create and publish an R Markdown document

*************



In this chapter you will learn how to create an HTML report (of the PCA you did in
earlier chapters) using [`R Markdown`](http://rmarkdown.rstudio.com/). You will
then learn how to publish this report online. **The following steps must be completed on the `gh-pages` branch**

*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************

### Step 7.1

In RStudio, click on the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown0.png" alt="Drawing" style="width: 50px;"/> dropdown
list and select `R Markdown...`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown1.png)

*************
*************
*************
*************
*************


### Step 7.2

If you don't have the required packages, RStudio will automatically install them.
Click `Yes`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown2.png)

*************
*************
*************
*************
*************


### Step 7.3

This screen appears to indicate the installation of required packages to use
`R Markdown`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown3.png)

*************
*************
*************
*************
*************


### Step 7.4

Enter a title and author. Ensure that the `Default Output Format` is HTML.
Click on `OK`.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown4.png)

*************
*************
*************
*************
*************


### Step 7.5

To ensure everything is working correctly compile the document by clicking on
the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown00.png" alt="Drawing" style="width: 100px;"/> button.
This will convert the `R Markdown` document to HTML.


*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown5.png)

*************
*************
*************
*************
*************


### Step 7.6

You will be prompted to save the file. **It must be saved as `index.Rmd`**
Click on `Save`

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown6.png)

*************
*************
*************
*************
*************


### Step 7.7

If everything is working properly, an HTML document named `index.html` will appear.
This is the HTML report, also called a _dynamic document_ that contains both
`R code` and text.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown7.png)

*************
*************
*************
*************
*************


### Step 7.8

I have created a sample report which you can see [here](https://raw.githubusercontent.com/git4ds/pcaCars/gh-pages/index.Rmd).
Copy the contents of that report and paste it into the `index.Rmd` file, replacing its entire contents.
Click on the  <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown00.png" alt="Drawing" style="width: 70px;"/> button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown8.png)

*************
*************
*************
*************
*************


### Step 7.9

The HTML document will automatically load after the document has finished compiling. You can view
this document in your web browser by clicking the `Open in Browser` button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown9.png)

*************
*************
*************
*************
*************


### Step 7.10

Note the location and filename of the document. It is currently only on your computer, and
has not been published online.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown10.png)

*************
*************
*************
*************
*************


### Step 7.11

Both RStudio and GitHub Desktop have noticed the changes you made to the `gh-pages`
branch.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown11.png)

*************
*************
*************
*************
*************


### Step 7.12

In GitHub Desktop, select all the files that have been changed or added, describe the changes
and click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown_ghpages.png" alt="Drawing" style="width: 145px;"/>

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown12.png)

*************
*************
*************
*************
*************


### Step 7.13

`Publish` the local changes to your online GitHub repository by clicking the
<img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv_publish.png" alt="Drawing" style="width: 100px;"/> button in GitHub Desktop.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown13.png)

*************
*************
*************
*************
*************


### Step 7.14

Head over to the `pcaCars` repository in your online GitHub account. Click on the
`Branch` dropdown list and select the `gh-pages` branch.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown14.png)

*************
*************
*************
*************
*************

### Step 7.15

Notice that the `R Markdown`, HTML and related files only appear in the `gh-pages`
branch because that where you _committed_ them.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown15.png)

*************
*************
*************
*************
*************

### Step 7.16

Click on the `Settings` tab. You will see a box called `GitHub Pages` which says
that your site has been published at `http://username.github.io/pcaCars`. Click on the
site to verify that the report has indeed been published online.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown16.png)

*************
*************
*************
*************
*************

### Step 7.17

Well done. The report has been published online. This makes it extremely easy to send
reports to your supervisor or collaborators, without having to send large email attachments with
long names indicating the version. Simply _commit_ new changes to the repository, and the report
will automatically get updated online.

The website link never changes, and you can simply send
an email to your supervisor or collaborators indicating that changes have been made to the
document.

There are four important things to note:

1. The html document that you want to publish must be on the `gh-pages` branch.
See [https://pages.github.com/](https://pages.github.com/) for more details.
2. The html document must be named `index.html`
3. The name of the website will always have this format: http://username.github.io/name_of_repository
4. Every repository you create can have its own website. Let's test this in Chapter 8.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown17.png)

*************
*************
*************
*************
*************


## Chapter 8: Create an online CV

*************



In this chapter you will learn how to create an online CV. The template I have
shown is for illustration purposes. The main objective here is for you to have a website
that has your CV. I highly recommend the advice given by [Sherri Rose](http://drsherrirose.com/academic-cvs-for-statistical-science-faculty-positions)
on Academic CVs for Statistical Science Faculty Positions.

*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************
*************

### Step 8.1

In GitHub Desktop, create a new repository called `cv`. Click on
<img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rcode/rcode0000.png" alt="Drawing" style="width: 145px;"/>

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv1.png)

*************
*************
*************
*************
*************


### Step 8.2

Create a `gh-pages` branch and click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/branch/branch000.png" alt="Drawing" style="width: 145px;"/>

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv2.png)

*************
*************
*************
*************
*************


### Step 8.3

Save [the template CV](https://raw.githubusercontent.com/git4ds/cv/gh-pages/index.Rmd) in the
newly created `cv` repository on your computer ([source](https://mszep.github.io/pandoc_resume/)).
Open the file in RStudio and click on
the <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown00.png" alt="Drawing" style="width: 100px;"/> button.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv3.png)

*************
*************
*************
*************
*************


### Step 8.4

Commit the changes in GitHub Desktop. Describe the changes you made and click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/rmarkdown/rmarkdown_ghpages.png" alt="Drawing" style="width: 145px;"/>.


*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv4.png)

*************
*************
*************
*************
*************


### Step 8.5

Click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv_publish.png" alt="Drawing" style="width: 100px;"/> to _push_ your changes to your online GitHub account.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv5.png)

*************
*************
*************
*************
*************


### Step 8.6

After entering a description of the repository click on <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv_publishcv.png" alt="Drawing" style="width: 145px;"/>.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv6.png)

*************
*************
*************
*************
*************


### Step 8.7

Your GitHub Desktop should now be _clean_.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv7.png)

*************
*************
*************
*************
*************


### Step 8.8

Go to your online GitHub account and navigate to the `cv` repository

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv8.png)

*************
*************
*************
*************
*************


### Step 8.9

In setting you should see that your site has been published.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv9.png)

*************
*************
*************
*************
*************


### Step 8.10

Well done. You now have an online CV.

*************

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/git/cv/cv10.png)

*************
*************
*************
*************
*************

This concludes the tutorial. Well done.


## Conclusion

GitHub has evolved into a necessary tool for anyone doing data analysis. It is not uncommon now for employers to prioritize your GitHub portfolio over your CV. This tutorial demonstrates how simple it is to get up and running with GitHub. In addition to having an easy-to-use interface, it allows you to easily create websites and host dynamic documents. I encourage you to adopt this workflow, whether you work in industry or academia, to showcase your work, increase efficiency and ensure reproducibility.
