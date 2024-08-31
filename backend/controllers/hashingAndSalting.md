# Salting

Salting is the process of adding a random value (the "salt") to the password before hashing it. This random value is unique for each password or user. The key characteristics of salting

1. Purpose: Salting is used to ensure that even if two users have the same password, their hashed passwords will be different. It helps protect against precomputed attacks, such as rainbow table attacks.

2. Randomness: Each salt is unique and randomly generated for each password or user, adding additional randomness to the hashing process.

3. Stored Separately: The salt is usually stored alongside the hash in the database. It’s used during the login process to hash the user’s provided password and compare it with the stored hash.

4. Salting and Hashing Together: Salting is used in conjunction with hashing. The salt is appended or prepended to the password before hashing.

# Hashing

Hashing is a process of transforming an input (like a password) into a fixed-length string of characters, which appears random. The primary characteristics of hashing are:

1. One-Way Function: Hashing is a one-way function, meaning that once data is hashed, it cannot be reverted to its original form. The original password cannot be recovered from its hash.

2. Deterministic: Given the same input, a hash function will always produce the same hash value.

3. Fixed Output Size: Regardless of the input size, the output (hash) is of a fixed size. For example, SHA-256 always produces a 256-bit hash.

4. Common Algorithms: Examples include MD5, SHA-1, SHA-256, and bcrypt.

5. Purpose: Hashing is used to securely store passwords and ensure data integrity by producing a unique fingerprint of the input data.
