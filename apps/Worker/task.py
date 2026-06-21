import redis-agent

r = redis.Redis(
    host="redis",
    port=6379,
    decode_responses=True
)

def queue_review(repo):
    r.lpush("reviews", repo)

def get_review():
    return r.rpop("reviews")
