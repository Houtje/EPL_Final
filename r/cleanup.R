# EPL final project - data processing script

# Working directories
# setwd("C:/Users/Joris/Documents/GitHub/EPL_Final/r")
setwd("C:/Users/Arianne/Documents/EPL_Final/r/")

# Mod, plot and alpha libraries
library(numbers)
library(ggplot2)
library(ltm)

# Transform a question-transformation pair to a table format
tf <- function(q, tform){
  return(table(cres[(cres$question == q) & (cres$tform == tform),]$answer))
}

# Create a bar plot given a question and a topic
bplot <- function(q, topic){
  return(barplot(rbind(tf(q,0), tf(q,1), tf(q,2), tf(q,3)), col=c("red","green","blue","yellow"),
         main=paste(topic, "answers by transformation type", sep=" "), xlab="Answer", ylab="Frequency",
         legend = c("No transformation", "Passive", "Dutch it-clefting", "Both"), xlim=c(0,50), beside=TRUE))
}

# Clean results and separate comments
res <- read.csv("results.csv", header=FALSE, comment.char="#", na.strings="NULL", encoding="UTF-8")
com <- as.vector(res[(res$V6 == "comments") & (res$V9 != ""),]$V9)
cres <- res[(res$V4 != 1) & (res$V4 != 2),]
cres <- data.frame(ID=cres$V1, product=floor(cres$V4/4), tform=mod((cres$V4), 4), question=cres$V5,
                   answer=as.numeric(as.character(cres$V9)), rt=cres$V11)

# Calculate mean product with or without the transformations
mean_prod <- aggregate(cres$answer, by=list(product=cres$product, question=cres$question), FUN=mean)
mean_prod_t <- aggregate(cres$answer, by=list(product=cres$product, question=cres$question, transform=cres$tform), FUN=mean)

# Isolate kernel sentences
kernels <- cres[cres$tform == 0,]
mean_kern <- aggregate(kernels$answer, by=list(product=kernels$product, question=kernels$question), FUN=mean)

# Create bar plots for each question type
# bplot(1, "Clarity")
# bplot(2, "Interest")
# bplot(3, "Recommendation")
# bplot(4, "Buying")

# Plot mean answer per question for each product
plot(mean_prod[mean_prod$question == 1,]$product, mean_prod[mean_prod$question == 1,]$x, col="red", type="l", ylim=c(1,8),
     xlab="Product number", ylab="Mean rating")
lines(mean_prod[mean_prod$question == 2,]$product, mean_prod[mean_prod$question == 2,]$x, col="green")
lines(mean_prod[mean_prod$question == 3,]$product, mean_prod[mean_prod$question == 3,]$x, col="blue")
lines(mean_prod[mean_prod$question == 4,]$product, mean_prod[mean_prod$question == 4,]$x, col="purple")
legend(9.5,8,legend=c("Clear","Interested","Recommend","Buy"), fill=c("red","green","blue","purple"))

# Apply t-test to question pairs
# TODO: not sure in what way
t.test(mean_prod[mean_prod$question == 2,]$x, mean_prod[mean_prod$question == 1,]$x, paired=TRUE)
t.test(mean_prod[mean_prod$question == 3,]$x, mean_prod[mean_prod$question == 1,]$x, paired=TRUE)
t.test(mean_prod[mean_prod$question == 4,]$x, mean_prod[mean_prod$question == 1,]$x, paired=TRUE)

t.test(mean_prod[mean_prod$question == 3,]$x, mean_prod[mean_prod$question == 2,]$x, paired=TRUE)
t.test(mean_prod[mean_prod$question == 4,]$x, mean_prod[mean_prod$question == 2,]$x, paired=TRUE)
t.test(mean_prod[mean_prod$question == 4,]$x, mean_prod[mean_prod$question == 3,]$x, paired=TRUE)

# Calculate Cronbach's alpha
# Legacy code, we didn't need this after all
# ccres <- data.frame(cres$product, cres$tform, cres$question, cres$answer)
# cronbach.alpha(ccres[ccres$cres.question == 1,])
# cronbach.alpha(data.frame(mean_prod[mean_prod$question == 3,]))

# Rename the product types for later visualisation
# mean_prod_t$product = as.factor(mean_prod_t$product)

mean_prod_t$product[mean_prod_t$product == 1] = "Drill"
mean_prod_t$product[mean_prod_t$product == 2] = "Camera"
mean_prod_t$product[mean_prod_t$product == 3] = "Painkiller"
mean_prod_t$product[mean_prod_t$product == 4] = "Back pain reliever"
mean_prod_t$product[mean_prod_t$product == 5] = "Cleaning product"
mean_prod_t$product[mean_prod_t$product == 6] = "Tea"
mean_prod_t$product[mean_prod_t$product == 7] = "Paint"
mean_prod_t$product[mean_prod_t$product == 8] = "Bank"
mean_prod_t$product[mean_prod_t$product == 9] = "Pesticide"
mean_prod_t$product[mean_prod_t$product == 10] = "Travel guide"
mean_prod_t$product[mean_prod_t$product == 11] = "Chili sauce"
mean_prod_t$product[mean_prod_t$product == 12] = "Record player"

# Rename question types as well
mean_prod_t$question[mean_prod_t$question == 1] = "Clarity"
mean_prod_t$question[mean_prod_t$question == 2] = "Interest"
mean_prod_t$question[mean_prod_t$question == 3] = "Recommendation"
mean_prod_t$question[mean_prod_t$question == 4] = "Buying"

# Plot, for each product type, mean rating per transformation per question
ggplot(mean_prod_t, aes(x=transform, y=x, fill=question)) + 
  geom_bar(position = "dodge", stat="identity") + facet_wrap(~product) +
  xlab("Transformation") + ylab("Mean Rating")