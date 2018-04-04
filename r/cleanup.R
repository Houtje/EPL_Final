# EPL final project - data processing script

setwd("C:/Users/Joris/Documents/GitHub/EPL_Final/r")

library(numbers)

tf <- function(q, tform){
  return(table(as.numeric(as.character(cres[(cres$question == q) & (cres$tform == tform),]$answer))))
}

bplot <- function(q, topic){
  return(barplot(rbind(tf(q,0), tf(q,1), tf(q,2), tf(q,3)), col=c("red","green","blue","yellow"),
         main=paste(topic, "answers by transformation type", sep=" "), xlab="Answer", ylab="Frequency",
         legend = c("No transformation", "Passive", "Dutch it-clefting", "Both"), xlim=c(0,50), beside=TRUE))
}

res <- read.csv("results.csv", header=FALSE, comment.char="#", na.strings="NULL", encoding="UTF-8")
com <- as.vector(res[(res$V6 == "comments") & (res$V9 != ""),]$V9)
cres <- res[(res$V4 != 1) & (res$V4 != 2),]
cres <- data.frame(ID=cres$V1, tform=mod((cres$V4), 4), question=cres$V5, answer=cres$V9, rt=cres$V11)

bplot(1, "Clarity")
bplot(2, "Interest")
bplot(3, "Recommendation")
bplot(4, "Buying")