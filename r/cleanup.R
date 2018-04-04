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

mean_prod_1 <- aggregate(cres$answer, by=list(product=cres$product, question=cres$question, transform=cres$tform), FUN=mean)
mean_kern_1 <- aggregate(kernels$answer, by=list(prod=kernels$product, q=kernels$question), FUN=mean)

# bplot(1, "Clarity")
# bplot(2, "Interest")
# bplot(3, "Recommendation")
# bplot(4, "Buying")

#mean_prod_1$product = as.factor(mean_prod_1$product)

mean_prod_1$product[mean_prod_1$product == 1] = "Drill"
mean_prod_1$product[mean_prod_1$product == 2] = "Camera"
mean_prod_1$product[mean_prod_1$product == 3] = "Painkiller"
mean_prod_1$product[mean_prod_1$product == 4] = "Back pain reliever"
mean_prod_1$product[mean_prod_1$product == 5] = "Cleaning product"
mean_prod_1$product[mean_prod_1$product == 6] = "Tea"
mean_prod_1$product[mean_prod_1$product == 7] = "Paint"
mean_prod_1$product[mean_prod_1$product == 8] = "Bank"
mean_prod_1$product[mean_prod_1$product == 9] = "Pesticide"
mean_prod_1$product[mean_prod_1$product == 10] = "Travel guide"
mean_prod_1$product[mean_prod_1$product == 12] = "Chili sauce"
mean_prod_1$product[mean_prod_1$product == 12] = "Record player"

mean_prod_1$question[mean_prod_1$question == 1] = "Clarity"
mean_prod_1$question[mean_prod_1$question == 2] = "Interest"
mean_prod_1$question[mean_prod_1$question == 3] = "Recommendation"
mean_prod_1$question[mean_prod_1$question == 4] = "Buying"

ggplot(mean_prod_1, aes(x=transform, y=x, fill=question)) + 
  geom_bar(position = "dodge", stat="identity") + facet_wrap(~product) + ylab("Mean Rating")

