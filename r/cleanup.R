# EPL final project - data processing script

#setwd("C:/Users/Joris/Documents/GitHub/EPL_Final/r")
setwd("C:/Users/Arianne/Documents/EPL_Final/r/")

library(numbers)
library(ggplot2)

tf <- function(q, tform){
  return(table(cres[(cres$question == q) & (cres$tform == tform),]$answer))
}

bplot <- function(q, topic){
  return(barplot(rbind(tf(q,0), tf(q,1), tf(q,2), tf(q,3)), col=c("red","green","blue","yellow"),
         main=paste(topic, "answers by transformation type", sep=" "), xlab="Answer", ylab="Frequency",
         legend = c("No transformation", "Passive", "Dutch it-clefting", "Both"), xlim=c(0,50), beside=TRUE))
}

res <- read.csv("results.csv", header=FALSE, comment.char="#", na.strings="NULL", encoding="UTF-8")
com <- as.vector(res[(res$V6 == "comments") & (res$V9 != ""),]$V9)
cres <- res[(res$V4 != 1) & (res$V4 != 2),]
cres <- data.frame(ID=cres$V1, product=floor(cres$V4/4), tform=mod((cres$V4), 4), question=cres$V5,
                   answer=as.numeric(as.character(cres$V9)), rt=cres$V11)
kernels <- cres[cres$tform == 0,]

mean_prod_1 <- aggregate(cres$answer, by=list(prod=cres$product, q=cres$question), FUN=mean)
mean_kern_1 <- aggregate(kernels$answer, by=list(prod=kernels$product, q=kernels$question), FUN=mean)

# bplot(1, "Clarity")
# bplot(2, "Interest")
# bplot(3, "Recommendation")
# bplot(4, "Buying")

ggplot(kernels, aes(x=product, y=answer, fill=question)) + 
  geom_bar(position=position_dodge(), stat="identity")

