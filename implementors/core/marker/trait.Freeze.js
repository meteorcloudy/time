(function() {var implementors = {};
implementors["libc"] = [{"text":"impl Freeze for group","synthetic":true,"types":[]},{"text":"impl Freeze for utimbuf","synthetic":true,"types":[]},{"text":"impl Freeze for timeval","synthetic":true,"types":[]},{"text":"impl Freeze for timespec","synthetic":true,"types":[]},{"text":"impl Freeze for rlimit","synthetic":true,"types":[]},{"text":"impl Freeze for rusage","synthetic":true,"types":[]},{"text":"impl Freeze for ipv6_mreq","synthetic":true,"types":[]},{"text":"impl Freeze for hostent","synthetic":true,"types":[]},{"text":"impl Freeze for iovec","synthetic":true,"types":[]},{"text":"impl Freeze for pollfd","synthetic":true,"types":[]},{"text":"impl Freeze for winsize","synthetic":true,"types":[]},{"text":"impl Freeze for linger","synthetic":true,"types":[]},{"text":"impl Freeze for sigval","synthetic":true,"types":[]},{"text":"impl Freeze for itimerval","synthetic":true,"types":[]},{"text":"impl Freeze for tms","synthetic":true,"types":[]},{"text":"impl Freeze for servent","synthetic":true,"types":[]},{"text":"impl Freeze for protoent","synthetic":true,"types":[]},{"text":"impl Freeze for in_addr","synthetic":true,"types":[]},{"text":"impl Freeze for ip_mreq","synthetic":true,"types":[]},{"text":"impl Freeze for ip_mreq_source","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_in","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_in6","synthetic":true,"types":[]},{"text":"impl Freeze for addrinfo","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_ll","synthetic":true,"types":[]},{"text":"impl Freeze for fd_set","synthetic":true,"types":[]},{"text":"impl Freeze for tm","synthetic":true,"types":[]},{"text":"impl Freeze for sched_param","synthetic":true,"types":[]},{"text":"impl Freeze for Dl_info","synthetic":true,"types":[]},{"text":"impl Freeze for lconv","synthetic":true,"types":[]},{"text":"impl Freeze for in_pktinfo","synthetic":true,"types":[]},{"text":"impl Freeze for ifaddrs","synthetic":true,"types":[]},{"text":"impl Freeze for in6_rtmsg","synthetic":true,"types":[]},{"text":"impl Freeze for arpreq","synthetic":true,"types":[]},{"text":"impl Freeze for arpreq_old","synthetic":true,"types":[]},{"text":"impl Freeze for arphdr","synthetic":true,"types":[]},{"text":"impl Freeze for mmsghdr","synthetic":true,"types":[]},{"text":"impl Freeze for epoll_event","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_un","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_storage","synthetic":true,"types":[]},{"text":"impl Freeze for utsname","synthetic":true,"types":[]},{"text":"impl Freeze for sigevent","synthetic":true,"types":[]},{"text":"impl Freeze for rlimit64","synthetic":true,"types":[]},{"text":"impl Freeze for glob_t","synthetic":true,"types":[]},{"text":"impl Freeze for passwd","synthetic":true,"types":[]},{"text":"impl Freeze for spwd","synthetic":true,"types":[]},{"text":"impl Freeze for dqblk","synthetic":true,"types":[]},{"text":"impl Freeze for signalfd_siginfo","synthetic":true,"types":[]},{"text":"impl Freeze for itimerspec","synthetic":true,"types":[]},{"text":"impl Freeze for fsid_t","synthetic":true,"types":[]},{"text":"impl Freeze for packet_mreq","synthetic":true,"types":[]},{"text":"impl Freeze for cpu_set_t","synthetic":true,"types":[]},{"text":"impl Freeze for if_nameindex","synthetic":true,"types":[]},{"text":"impl Freeze for msginfo","synthetic":true,"types":[]},{"text":"impl Freeze for sembuf","synthetic":true,"types":[]},{"text":"impl Freeze for input_event","synthetic":true,"types":[]},{"text":"impl Freeze for input_id","synthetic":true,"types":[]},{"text":"impl Freeze for input_absinfo","synthetic":true,"types":[]},{"text":"impl Freeze for input_keymap_entry","synthetic":true,"types":[]},{"text":"impl Freeze for input_mask","synthetic":true,"types":[]},{"text":"impl Freeze for ff_replay","synthetic":true,"types":[]},{"text":"impl Freeze for ff_trigger","synthetic":true,"types":[]},{"text":"impl Freeze for ff_envelope","synthetic":true,"types":[]},{"text":"impl Freeze for ff_constant_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_ramp_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_condition_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_periodic_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_rumble_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_effect","synthetic":true,"types":[]},{"text":"impl Freeze for dl_phdr_info","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Ehdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Ehdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Sym","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Sym","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Phdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Phdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Shdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Shdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Chdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Chdr","synthetic":true,"types":[]},{"text":"impl Freeze for ucred","synthetic":true,"types":[]},{"text":"impl Freeze for mntent","synthetic":true,"types":[]},{"text":"impl Freeze for posix_spawn_file_actions_t","synthetic":true,"types":[]},{"text":"impl Freeze for posix_spawnattr_t","synthetic":true,"types":[]},{"text":"impl Freeze for genlmsghdr","synthetic":true,"types":[]},{"text":"impl Freeze for in6_pktinfo","synthetic":true,"types":[]},{"text":"impl Freeze for arpd_request","synthetic":true,"types":[]},{"text":"impl Freeze for inotify_event","synthetic":true,"types":[]},{"text":"impl Freeze for fanotify_response","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_vm","synthetic":true,"types":[]},{"text":"impl Freeze for regmatch_t","synthetic":true,"types":[]},{"text":"impl Freeze for sock_extended_err","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_nl","synthetic":true,"types":[]},{"text":"impl Freeze for dirent","synthetic":true,"types":[]},{"text":"impl Freeze for dirent64","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_alg","synthetic":true,"types":[]},{"text":"impl Freeze for af_alg_iv","synthetic":true,"types":[]},{"text":"impl Freeze for mq_attr","synthetic":true,"types":[]},{"text":"impl Freeze for statx","synthetic":true,"types":[]},{"text":"impl Freeze for statx_timestamp","synthetic":true,"types":[]},{"text":"impl Freeze for aiocb","synthetic":true,"types":[]},{"text":"impl Freeze for __exit_status","synthetic":true,"types":[]},{"text":"impl Freeze for __timeval","synthetic":true,"types":[]},{"text":"impl Freeze for glob64_t","synthetic":true,"types":[]},{"text":"impl Freeze for msghdr","synthetic":true,"types":[]},{"text":"impl Freeze for cmsghdr","synthetic":true,"types":[]},{"text":"impl Freeze for termios","synthetic":true,"types":[]},{"text":"impl Freeze for mallinfo","synthetic":true,"types":[]},{"text":"impl Freeze for nlmsghdr","synthetic":true,"types":[]},{"text":"impl Freeze for nlmsgerr","synthetic":true,"types":[]},{"text":"impl Freeze for nl_pktinfo","synthetic":true,"types":[]},{"text":"impl Freeze for nl_mmap_req","synthetic":true,"types":[]},{"text":"impl Freeze for nl_mmap_hdr","synthetic":true,"types":[]},{"text":"impl Freeze for nlattr","synthetic":true,"types":[]},{"text":"impl Freeze for rtentry","synthetic":true,"types":[]},{"text":"impl Freeze for timex","synthetic":true,"types":[]},{"text":"impl Freeze for ntptimeval","synthetic":true,"types":[]},{"text":"impl Freeze for regex_t","synthetic":true,"types":[]},{"text":"impl Freeze for utmpx","synthetic":true,"types":[]},{"text":"impl Freeze for sigset_t","synthetic":true,"types":[]},{"text":"impl Freeze for sysinfo","synthetic":true,"types":[]},{"text":"impl Freeze for msqid_ds","synthetic":true,"types":[]},{"text":"impl Freeze for sigaction","synthetic":true,"types":[]},{"text":"impl Freeze for statfs","synthetic":true,"types":[]},{"text":"impl Freeze for flock","synthetic":true,"types":[]},{"text":"impl Freeze for flock64","synthetic":true,"types":[]},{"text":"impl Freeze for siginfo_t","synthetic":true,"types":[]},{"text":"impl Freeze for stack_t","synthetic":true,"types":[]},{"text":"impl Freeze for stat","synthetic":true,"types":[]},{"text":"impl Freeze for stat64","synthetic":true,"types":[]},{"text":"impl Freeze for statfs64","synthetic":true,"types":[]},{"text":"impl Freeze for statvfs64","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_attr_t","synthetic":true,"types":[]},{"text":"impl Freeze for _libc_fpxreg","synthetic":true,"types":[]},{"text":"impl Freeze for _libc_xmmreg","synthetic":true,"types":[]},{"text":"impl Freeze for _libc_fpstate","synthetic":true,"types":[]},{"text":"impl Freeze for user_regs_struct","synthetic":true,"types":[]},{"text":"impl Freeze for user","synthetic":true,"types":[]},{"text":"impl Freeze for mcontext_t","synthetic":true,"types":[]},{"text":"impl Freeze for ipc_perm","synthetic":true,"types":[]},{"text":"impl Freeze for shmid_ds","synthetic":true,"types":[]},{"text":"impl Freeze for termios2","synthetic":true,"types":[]},{"text":"impl Freeze for ip_mreqn","synthetic":true,"types":[]},{"text":"impl Freeze for user_fpregs_struct","synthetic":true,"types":[]},{"text":"impl Freeze for ucontext_t","synthetic":true,"types":[]},{"text":"impl Freeze for statvfs","synthetic":true,"types":[]},{"text":"impl Freeze for max_align_t","synthetic":true,"types":[]},{"text":"impl Freeze for sem_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_mutexattr_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_rwlockattr_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_condattr_t","synthetic":true,"types":[]},{"text":"impl Freeze for fanotify_event_metadata","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_cond_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_mutex_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_rwlock_t","synthetic":true,"types":[]},{"text":"impl Freeze for in6_addr","synthetic":true,"types":[]},{"text":"impl Freeze for DIR","synthetic":true,"types":[]},{"text":"impl Freeze for FILE","synthetic":true,"types":[]},{"text":"impl Freeze for fpos_t","synthetic":true,"types":[]},{"text":"impl Freeze for timezone","synthetic":true,"types":[]},{"text":"impl Freeze for fpos64_t","synthetic":true,"types":[]}];
implementors["ppv_lite86"] = [{"text":"impl Freeze for YesS3","synthetic":true,"types":[]},{"text":"impl Freeze for NoS3","synthetic":true,"types":[]},{"text":"impl Freeze for YesS4","synthetic":true,"types":[]},{"text":"impl Freeze for NoS4","synthetic":true,"types":[]},{"text":"impl Freeze for YesA1","synthetic":true,"types":[]},{"text":"impl Freeze for NoA1","synthetic":true,"types":[]},{"text":"impl Freeze for YesA2","synthetic":true,"types":[]},{"text":"impl Freeze for NoA2","synthetic":true,"types":[]},{"text":"impl Freeze for YesNI","synthetic":true,"types":[]},{"text":"impl Freeze for NoNI","synthetic":true,"types":[]},{"text":"impl&lt;S3, S4, NI&gt; Freeze for SseMachine&lt;S3, S4, NI&gt;","synthetic":true,"types":[]},{"text":"impl&lt;NI&gt; Freeze for Avx2Machine&lt;NI&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for vec128_storage","synthetic":true,"types":[]},{"text":"impl Freeze for vec256_storage","synthetic":true,"types":[]},{"text":"impl Freeze for vec512_storage","synthetic":true,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Freeze for TokenStream","synthetic":true,"types":[]},{"text":"impl Freeze for LexError","synthetic":true,"types":[]},{"text":"impl Freeze for Span","synthetic":true,"types":[]},{"text":"impl Freeze for Group","synthetic":true,"types":[]},{"text":"impl Freeze for Punct","synthetic":true,"types":[]},{"text":"impl Freeze for Ident","synthetic":true,"types":[]},{"text":"impl Freeze for Literal","synthetic":true,"types":[]},{"text":"impl Freeze for TokenTree","synthetic":true,"types":[]},{"text":"impl Freeze for Delimiter","synthetic":true,"types":[]},{"text":"impl Freeze for Spacing","synthetic":true,"types":[]},{"text":"impl Freeze for IntoIter","synthetic":true,"types":[]}];
implementors["rand"] = [{"text":"impl Freeze for Bernoulli","synthetic":true,"types":[]},{"text":"impl Freeze for Open01","synthetic":true,"types":[]},{"text":"impl Freeze for OpenClosed01","synthetic":true,"types":[]},{"text":"impl Freeze for Alphanumeric","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Freeze for Uniform&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;X as SampleUniform&gt;::Sampler: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D, R, T&gt; Freeze for DistIter&lt;D, R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Standard","synthetic":true,"types":[]},{"text":"impl Freeze for BernoulliError","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Freeze for UniformInt&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Freeze for UniformFloat&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for UniformDuration","synthetic":true,"types":[]},{"text":"impl Freeze for StdRng","synthetic":true,"types":[]},{"text":"impl&lt;R, Rsdr&gt; Freeze for ReseedingRng&lt;R, Rsdr&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rsdr: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for StepRng","synthetic":true,"types":[]}];
implementors["rand_chacha"] = [{"text":"impl Freeze for ChaCha12Core","synthetic":true,"types":[]},{"text":"impl Freeze for ChaCha12Rng","synthetic":true,"types":[]},{"text":"impl Freeze for ChaCha20Core","synthetic":true,"types":[]},{"text":"impl Freeze for ChaCha20Rng","synthetic":true,"types":[]},{"text":"impl Freeze for ChaCha8Core","synthetic":true,"types":[]},{"text":"impl Freeze for ChaCha8Rng","synthetic":true,"types":[]}];
implementors["rand_core"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl&lt;R:&nbsp;?Sized&gt; Freeze for BlockRng&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R:&nbsp;?Sized&gt; Freeze for BlockRng64&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["serde"] = [{"text":"impl Freeze for IgnoredAny","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Unexpected&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for UnitDeserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for BoolDeserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for I8Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for I16Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for I32Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for I64Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for IsizeDeserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for U8Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for U16Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for U64Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for UsizeDeserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for F32Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for F64Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for CharDeserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for I128Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for U128Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for U32Deserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, E&gt; Freeze for StrDeserializer&lt;'a, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'de, E&gt; Freeze for BorrowedStrDeserializer&lt;'de, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for StringDeserializer&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, E&gt; Freeze for CowStrDeserializer&lt;'a, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'de, E&gt; Freeze for BorrowedBytesDeserializer&lt;'de, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, E&gt; Freeze for SeqDeserializer&lt;I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for SeqAccessDeserializer&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'de, I, E&gt; Freeze for MapDeserializer&lt;'de, I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;I as Iterator&gt;::Item as Pair&gt;::Second: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Freeze for MapAccessDeserializer&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Ok, Error&gt; Freeze for Impossible&lt;Ok, Error&gt;","synthetic":true,"types":[]}];
implementors["syn"] = [{"text":"impl Freeze for Attribute","synthetic":true,"types":[]},{"text":"impl Freeze for MetaList","synthetic":true,"types":[]},{"text":"impl Freeze for MetaNameValue","synthetic":true,"types":[]},{"text":"impl Freeze for Field","synthetic":true,"types":[]},{"text":"impl Freeze for FieldsNamed","synthetic":true,"types":[]},{"text":"impl Freeze for FieldsUnnamed","synthetic":true,"types":[]},{"text":"impl Freeze for Variant","synthetic":true,"types":[]},{"text":"impl Freeze for VisCrate","synthetic":true,"types":[]},{"text":"impl Freeze for VisPublic","synthetic":true,"types":[]},{"text":"impl Freeze for VisRestricted","synthetic":true,"types":[]},{"text":"impl Freeze for Arm","synthetic":true,"types":[]},{"text":"impl Freeze for FieldValue","synthetic":true,"types":[]},{"text":"impl Freeze for Label","synthetic":true,"types":[]},{"text":"impl Freeze for MethodTurbofish","synthetic":true,"types":[]},{"text":"impl Freeze for ExprArray","synthetic":true,"types":[]},{"text":"impl Freeze for ExprAssign","synthetic":true,"types":[]},{"text":"impl Freeze for ExprAssignOp","synthetic":true,"types":[]},{"text":"impl Freeze for ExprAsync","synthetic":true,"types":[]},{"text":"impl Freeze for ExprAwait","synthetic":true,"types":[]},{"text":"impl Freeze for ExprBinary","synthetic":true,"types":[]},{"text":"impl Freeze for ExprBlock","synthetic":true,"types":[]},{"text":"impl Freeze for ExprBox","synthetic":true,"types":[]},{"text":"impl Freeze for ExprBreak","synthetic":true,"types":[]},{"text":"impl Freeze for ExprCall","synthetic":true,"types":[]},{"text":"impl Freeze for ExprCast","synthetic":true,"types":[]},{"text":"impl Freeze for ExprClosure","synthetic":true,"types":[]},{"text":"impl Freeze for ExprContinue","synthetic":true,"types":[]},{"text":"impl Freeze for ExprField","synthetic":true,"types":[]},{"text":"impl Freeze for ExprForLoop","synthetic":true,"types":[]},{"text":"impl Freeze for ExprGroup","synthetic":true,"types":[]},{"text":"impl Freeze for ExprIf","synthetic":true,"types":[]},{"text":"impl Freeze for ExprIndex","synthetic":true,"types":[]},{"text":"impl Freeze for ExprLet","synthetic":true,"types":[]},{"text":"impl Freeze for ExprLit","synthetic":true,"types":[]},{"text":"impl Freeze for ExprLoop","synthetic":true,"types":[]},{"text":"impl Freeze for ExprMacro","synthetic":true,"types":[]},{"text":"impl Freeze for ExprMatch","synthetic":true,"types":[]},{"text":"impl Freeze for ExprMethodCall","synthetic":true,"types":[]},{"text":"impl Freeze for ExprParen","synthetic":true,"types":[]},{"text":"impl Freeze for ExprPath","synthetic":true,"types":[]},{"text":"impl Freeze for ExprRange","synthetic":true,"types":[]},{"text":"impl Freeze for ExprReference","synthetic":true,"types":[]},{"text":"impl Freeze for ExprRepeat","synthetic":true,"types":[]},{"text":"impl Freeze for ExprReturn","synthetic":true,"types":[]},{"text":"impl Freeze for ExprStruct","synthetic":true,"types":[]},{"text":"impl Freeze for ExprTry","synthetic":true,"types":[]},{"text":"impl Freeze for ExprTryBlock","synthetic":true,"types":[]},{"text":"impl Freeze for ExprTuple","synthetic":true,"types":[]},{"text":"impl Freeze for ExprType","synthetic":true,"types":[]},{"text":"impl Freeze for ExprUnary","synthetic":true,"types":[]},{"text":"impl Freeze for ExprUnsafe","synthetic":true,"types":[]},{"text":"impl Freeze for ExprWhile","synthetic":true,"types":[]},{"text":"impl Freeze for ExprYield","synthetic":true,"types":[]},{"text":"impl Freeze for Index","synthetic":true,"types":[]},{"text":"impl Freeze for BoundLifetimes","synthetic":true,"types":[]},{"text":"impl Freeze for ConstParam","synthetic":true,"types":[]},{"text":"impl Freeze for Generics","synthetic":true,"types":[]},{"text":"impl Freeze for LifetimeDef","synthetic":true,"types":[]},{"text":"impl Freeze for PredicateEq","synthetic":true,"types":[]},{"text":"impl Freeze for PredicateLifetime","synthetic":true,"types":[]},{"text":"impl Freeze for PredicateType","synthetic":true,"types":[]},{"text":"impl Freeze for TraitBound","synthetic":true,"types":[]},{"text":"impl Freeze for TypeParam","synthetic":true,"types":[]},{"text":"impl Freeze for WhereClause","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ImplGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Turbofish&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for TypeGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ForeignItemFn","synthetic":true,"types":[]},{"text":"impl Freeze for ForeignItemMacro","synthetic":true,"types":[]},{"text":"impl Freeze for ForeignItemStatic","synthetic":true,"types":[]},{"text":"impl Freeze for ForeignItemType","synthetic":true,"types":[]},{"text":"impl Freeze for ImplItemConst","synthetic":true,"types":[]},{"text":"impl Freeze for ImplItemMacro","synthetic":true,"types":[]},{"text":"impl Freeze for ImplItemMethod","synthetic":true,"types":[]},{"text":"impl Freeze for ImplItemType","synthetic":true,"types":[]},{"text":"impl Freeze for ItemConst","synthetic":true,"types":[]},{"text":"impl Freeze for ItemEnum","synthetic":true,"types":[]},{"text":"impl Freeze for ItemExternCrate","synthetic":true,"types":[]},{"text":"impl Freeze for ItemFn","synthetic":true,"types":[]},{"text":"impl Freeze for ItemForeignMod","synthetic":true,"types":[]},{"text":"impl Freeze for ItemImpl","synthetic":true,"types":[]},{"text":"impl Freeze for ItemMacro","synthetic":true,"types":[]},{"text":"impl Freeze for ItemMacro2","synthetic":true,"types":[]},{"text":"impl Freeze for ItemMod","synthetic":true,"types":[]},{"text":"impl Freeze for ItemStatic","synthetic":true,"types":[]},{"text":"impl Freeze for ItemStruct","synthetic":true,"types":[]},{"text":"impl Freeze for ItemTrait","synthetic":true,"types":[]},{"text":"impl Freeze for ItemTraitAlias","synthetic":true,"types":[]},{"text":"impl Freeze for ItemType","synthetic":true,"types":[]},{"text":"impl Freeze for ItemUnion","synthetic":true,"types":[]},{"text":"impl Freeze for ItemUse","synthetic":true,"types":[]},{"text":"impl Freeze for Receiver","synthetic":true,"types":[]},{"text":"impl Freeze for Signature","synthetic":true,"types":[]},{"text":"impl Freeze for TraitItemConst","synthetic":true,"types":[]},{"text":"impl Freeze for TraitItemMacro","synthetic":true,"types":[]},{"text":"impl Freeze for TraitItemMethod","synthetic":true,"types":[]},{"text":"impl Freeze for TraitItemType","synthetic":true,"types":[]},{"text":"impl Freeze for UseGlob","synthetic":true,"types":[]},{"text":"impl Freeze for UseGroup","synthetic":true,"types":[]},{"text":"impl Freeze for UseName","synthetic":true,"types":[]},{"text":"impl Freeze for UsePath","synthetic":true,"types":[]},{"text":"impl Freeze for UseRename","synthetic":true,"types":[]},{"text":"impl Freeze for File","synthetic":true,"types":[]},{"text":"impl Freeze for Lifetime","synthetic":true,"types":[]},{"text":"impl Freeze for LitBool","synthetic":true,"types":[]},{"text":"impl Freeze for LitByte","synthetic":true,"types":[]},{"text":"impl Freeze for LitByteStr","synthetic":true,"types":[]},{"text":"impl Freeze for LitChar","synthetic":true,"types":[]},{"text":"impl Freeze for LitFloat","synthetic":true,"types":[]},{"text":"impl Freeze for LitInt","synthetic":true,"types":[]},{"text":"impl Freeze for LitStr","synthetic":true,"types":[]},{"text":"impl Freeze for Macro","synthetic":true,"types":[]},{"text":"impl Freeze for DataEnum","synthetic":true,"types":[]},{"text":"impl Freeze for DataStruct","synthetic":true,"types":[]},{"text":"impl Freeze for DataUnion","synthetic":true,"types":[]},{"text":"impl Freeze for DeriveInput","synthetic":true,"types":[]},{"text":"impl Freeze for Block","synthetic":true,"types":[]},{"text":"impl Freeze for Local","synthetic":true,"types":[]},{"text":"impl Freeze for Abi","synthetic":true,"types":[]},{"text":"impl Freeze for BareFnArg","synthetic":true,"types":[]},{"text":"impl Freeze for TypeArray","synthetic":true,"types":[]},{"text":"impl Freeze for TypeBareFn","synthetic":true,"types":[]},{"text":"impl Freeze for TypeGroup","synthetic":true,"types":[]},{"text":"impl Freeze for TypeImplTrait","synthetic":true,"types":[]},{"text":"impl Freeze for TypeInfer","synthetic":true,"types":[]},{"text":"impl Freeze for TypeMacro","synthetic":true,"types":[]},{"text":"impl Freeze for TypeNever","synthetic":true,"types":[]},{"text":"impl Freeze for TypeParen","synthetic":true,"types":[]},{"text":"impl Freeze for TypePath","synthetic":true,"types":[]},{"text":"impl Freeze for TypePtr","synthetic":true,"types":[]},{"text":"impl Freeze for TypeReference","synthetic":true,"types":[]},{"text":"impl Freeze for TypeSlice","synthetic":true,"types":[]},{"text":"impl Freeze for TypeTraitObject","synthetic":true,"types":[]},{"text":"impl Freeze for TypeTuple","synthetic":true,"types":[]},{"text":"impl Freeze for Variadic","synthetic":true,"types":[]},{"text":"impl Freeze for FieldPat","synthetic":true,"types":[]},{"text":"impl Freeze for PatBox","synthetic":true,"types":[]},{"text":"impl Freeze for PatIdent","synthetic":true,"types":[]},{"text":"impl Freeze for PatLit","synthetic":true,"types":[]},{"text":"impl Freeze for PatMacro","synthetic":true,"types":[]},{"text":"impl Freeze for PatOr","synthetic":true,"types":[]},{"text":"impl Freeze for PatPath","synthetic":true,"types":[]},{"text":"impl Freeze for PatRange","synthetic":true,"types":[]},{"text":"impl Freeze for PatReference","synthetic":true,"types":[]},{"text":"impl Freeze for PatRest","synthetic":true,"types":[]},{"text":"impl Freeze for PatSlice","synthetic":true,"types":[]},{"text":"impl Freeze for PatStruct","synthetic":true,"types":[]},{"text":"impl Freeze for PatTuple","synthetic":true,"types":[]},{"text":"impl Freeze for PatTupleStruct","synthetic":true,"types":[]},{"text":"impl Freeze for PatType","synthetic":true,"types":[]},{"text":"impl Freeze for PatWild","synthetic":true,"types":[]},{"text":"impl Freeze for AngleBracketedGenericArguments","synthetic":true,"types":[]},{"text":"impl Freeze for Binding","synthetic":true,"types":[]},{"text":"impl Freeze for Constraint","synthetic":true,"types":[]},{"text":"impl Freeze for ParenthesizedGenericArguments","synthetic":true,"types":[]},{"text":"impl Freeze for Path","synthetic":true,"types":[]},{"text":"impl Freeze for PathSegment","synthetic":true,"types":[]},{"text":"impl Freeze for QSelf","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for AttrStyle","synthetic":true,"types":[]},{"text":"impl Freeze for Meta","synthetic":true,"types":[]},{"text":"impl Freeze for NestedMeta","synthetic":true,"types":[]},{"text":"impl Freeze for Fields","synthetic":true,"types":[]},{"text":"impl Freeze for Visibility","synthetic":true,"types":[]},{"text":"impl Freeze for GenericMethodArgument","synthetic":true,"types":[]},{"text":"impl Freeze for RangeLimits","synthetic":true,"types":[]},{"text":"impl Freeze for Expr","synthetic":true,"types":[]},{"text":"impl Freeze for Member","synthetic":true,"types":[]},{"text":"impl Freeze for GenericParam","synthetic":true,"types":[]},{"text":"impl Freeze for TraitBoundModifier","synthetic":true,"types":[]},{"text":"impl Freeze for TypeParamBound","synthetic":true,"types":[]},{"text":"impl Freeze for WherePredicate","synthetic":true,"types":[]},{"text":"impl Freeze for FnArg","synthetic":true,"types":[]},{"text":"impl Freeze for ForeignItem","synthetic":true,"types":[]},{"text":"impl Freeze for ImplItem","synthetic":true,"types":[]},{"text":"impl Freeze for Item","synthetic":true,"types":[]},{"text":"impl Freeze for TraitItem","synthetic":true,"types":[]},{"text":"impl Freeze for UseTree","synthetic":true,"types":[]},{"text":"impl Freeze for Lit","synthetic":true,"types":[]},{"text":"impl Freeze for StrStyle","synthetic":true,"types":[]},{"text":"impl Freeze for MacroDelimiter","synthetic":true,"types":[]},{"text":"impl Freeze for Data","synthetic":true,"types":[]},{"text":"impl Freeze for BinOp","synthetic":true,"types":[]},{"text":"impl Freeze for UnOp","synthetic":true,"types":[]},{"text":"impl Freeze for Stmt","synthetic":true,"types":[]},{"text":"impl Freeze for ReturnType","synthetic":true,"types":[]},{"text":"impl Freeze for Type","synthetic":true,"types":[]},{"text":"impl Freeze for Pat","synthetic":true,"types":[]},{"text":"impl Freeze for GenericArgument","synthetic":true,"types":[]},{"text":"impl Freeze for PathArguments","synthetic":true,"types":[]},{"text":"impl Freeze for Underscore","synthetic":true,"types":[]},{"text":"impl Freeze for Abstract","synthetic":true,"types":[]},{"text":"impl Freeze for As","synthetic":true,"types":[]},{"text":"impl Freeze for Async","synthetic":true,"types":[]},{"text":"impl Freeze for Auto","synthetic":true,"types":[]},{"text":"impl Freeze for Await","synthetic":true,"types":[]},{"text":"impl Freeze for Become","synthetic":true,"types":[]},{"text":"impl Freeze for Box","synthetic":true,"types":[]},{"text":"impl Freeze for Break","synthetic":true,"types":[]},{"text":"impl Freeze for Const","synthetic":true,"types":[]},{"text":"impl Freeze for Continue","synthetic":true,"types":[]},{"text":"impl Freeze for Crate","synthetic":true,"types":[]},{"text":"impl Freeze for Default","synthetic":true,"types":[]},{"text":"impl Freeze for Do","synthetic":true,"types":[]},{"text":"impl Freeze for Dyn","synthetic":true,"types":[]},{"text":"impl Freeze for Else","synthetic":true,"types":[]},{"text":"impl Freeze for Enum","synthetic":true,"types":[]},{"text":"impl Freeze for Extern","synthetic":true,"types":[]},{"text":"impl Freeze for Final","synthetic":true,"types":[]},{"text":"impl Freeze for Fn","synthetic":true,"types":[]},{"text":"impl Freeze for For","synthetic":true,"types":[]},{"text":"impl Freeze for If","synthetic":true,"types":[]},{"text":"impl Freeze for Impl","synthetic":true,"types":[]},{"text":"impl Freeze for In","synthetic":true,"types":[]},{"text":"impl Freeze for Let","synthetic":true,"types":[]},{"text":"impl Freeze for Loop","synthetic":true,"types":[]},{"text":"impl Freeze for Macro","synthetic":true,"types":[]},{"text":"impl Freeze for Match","synthetic":true,"types":[]},{"text":"impl Freeze for Mod","synthetic":true,"types":[]},{"text":"impl Freeze for Move","synthetic":true,"types":[]},{"text":"impl Freeze for Mut","synthetic":true,"types":[]},{"text":"impl Freeze for Override","synthetic":true,"types":[]},{"text":"impl Freeze for Priv","synthetic":true,"types":[]},{"text":"impl Freeze for Pub","synthetic":true,"types":[]},{"text":"impl Freeze for Ref","synthetic":true,"types":[]},{"text":"impl Freeze for Return","synthetic":true,"types":[]},{"text":"impl Freeze for SelfType","synthetic":true,"types":[]},{"text":"impl Freeze for SelfValue","synthetic":true,"types":[]},{"text":"impl Freeze for Static","synthetic":true,"types":[]},{"text":"impl Freeze for Struct","synthetic":true,"types":[]},{"text":"impl Freeze for Super","synthetic":true,"types":[]},{"text":"impl Freeze for Trait","synthetic":true,"types":[]},{"text":"impl Freeze for Try","synthetic":true,"types":[]},{"text":"impl Freeze for Type","synthetic":true,"types":[]},{"text":"impl Freeze for Typeof","synthetic":true,"types":[]},{"text":"impl Freeze for Union","synthetic":true,"types":[]},{"text":"impl Freeze for Unsafe","synthetic":true,"types":[]},{"text":"impl Freeze for Unsized","synthetic":true,"types":[]},{"text":"impl Freeze for Use","synthetic":true,"types":[]},{"text":"impl Freeze for Virtual","synthetic":true,"types":[]},{"text":"impl Freeze for Where","synthetic":true,"types":[]},{"text":"impl Freeze for While","synthetic":true,"types":[]},{"text":"impl Freeze for Yield","synthetic":true,"types":[]},{"text":"impl Freeze for Add","synthetic":true,"types":[]},{"text":"impl Freeze for AddEq","synthetic":true,"types":[]},{"text":"impl Freeze for And","synthetic":true,"types":[]},{"text":"impl Freeze for AndAnd","synthetic":true,"types":[]},{"text":"impl Freeze for AndEq","synthetic":true,"types":[]},{"text":"impl Freeze for At","synthetic":true,"types":[]},{"text":"impl Freeze for Bang","synthetic":true,"types":[]},{"text":"impl Freeze for Caret","synthetic":true,"types":[]},{"text":"impl Freeze for CaretEq","synthetic":true,"types":[]},{"text":"impl Freeze for Colon","synthetic":true,"types":[]},{"text":"impl Freeze for Colon2","synthetic":true,"types":[]},{"text":"impl Freeze for Comma","synthetic":true,"types":[]},{"text":"impl Freeze for Div","synthetic":true,"types":[]},{"text":"impl Freeze for DivEq","synthetic":true,"types":[]},{"text":"impl Freeze for Dollar","synthetic":true,"types":[]},{"text":"impl Freeze for Dot","synthetic":true,"types":[]},{"text":"impl Freeze for Dot2","synthetic":true,"types":[]},{"text":"impl Freeze for Dot3","synthetic":true,"types":[]},{"text":"impl Freeze for DotDotEq","synthetic":true,"types":[]},{"text":"impl Freeze for Eq","synthetic":true,"types":[]},{"text":"impl Freeze for EqEq","synthetic":true,"types":[]},{"text":"impl Freeze for Ge","synthetic":true,"types":[]},{"text":"impl Freeze for Gt","synthetic":true,"types":[]},{"text":"impl Freeze for Le","synthetic":true,"types":[]},{"text":"impl Freeze for Lt","synthetic":true,"types":[]},{"text":"impl Freeze for MulEq","synthetic":true,"types":[]},{"text":"impl Freeze for Ne","synthetic":true,"types":[]},{"text":"impl Freeze for Or","synthetic":true,"types":[]},{"text":"impl Freeze for OrEq","synthetic":true,"types":[]},{"text":"impl Freeze for OrOr","synthetic":true,"types":[]},{"text":"impl Freeze for Pound","synthetic":true,"types":[]},{"text":"impl Freeze for Question","synthetic":true,"types":[]},{"text":"impl Freeze for RArrow","synthetic":true,"types":[]},{"text":"impl Freeze for LArrow","synthetic":true,"types":[]},{"text":"impl Freeze for Rem","synthetic":true,"types":[]},{"text":"impl Freeze for RemEq","synthetic":true,"types":[]},{"text":"impl Freeze for FatArrow","synthetic":true,"types":[]},{"text":"impl Freeze for Semi","synthetic":true,"types":[]},{"text":"impl Freeze for Shl","synthetic":true,"types":[]},{"text":"impl Freeze for ShlEq","synthetic":true,"types":[]},{"text":"impl Freeze for Shr","synthetic":true,"types":[]},{"text":"impl Freeze for ShrEq","synthetic":true,"types":[]},{"text":"impl Freeze for Star","synthetic":true,"types":[]},{"text":"impl Freeze for Sub","synthetic":true,"types":[]},{"text":"impl Freeze for SubEq","synthetic":true,"types":[]},{"text":"impl Freeze for Tilde","synthetic":true,"types":[]},{"text":"impl Freeze for Brace","synthetic":true,"types":[]},{"text":"impl Freeze for Bracket","synthetic":true,"types":[]},{"text":"impl Freeze for Paren","synthetic":true,"types":[]},{"text":"impl Freeze for Group","synthetic":true,"types":[]},{"text":"impl Freeze for TokenBuffer","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Cursor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Freeze for Punctuated&lt;T, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; Freeze for Pairs&lt;'a, T, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; Freeze for PairsMut&lt;'a, T, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Freeze for IntoPairs&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for IntoIter&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Freeze for Pair&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Freeze for Lookahead1&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Freeze for ParseBuffer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 'a&gt; Freeze for StepCursor&lt;'c, 'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Nothing","synthetic":true,"types":[]}];
implementors["time"] = [{"text":"impl Freeze for Date","synthetic":true,"types":[]},{"text":"impl Freeze for Duration","synthetic":true,"types":[]},{"text":"impl Freeze for ComponentRangeError","synthetic":true,"types":[]},{"text":"impl Freeze for ConversionRangeError","synthetic":true,"types":[]},{"text":"impl Freeze for IndeterminateOffsetError","synthetic":true,"types":[]},{"text":"impl Freeze for Instant","synthetic":true,"types":[]},{"text":"impl Freeze for OffsetDateTime","synthetic":true,"types":[]},{"text":"impl Freeze for PrimitiveDateTime","synthetic":true,"types":[]},{"text":"impl Freeze for Time","synthetic":true,"types":[]},{"text":"impl Freeze for UtcOffset","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Format","synthetic":true,"types":[]},{"text":"impl Freeze for ParseError","synthetic":true,"types":[]},{"text":"impl Freeze for Sign","synthetic":true,"types":[]},{"text":"impl Freeze for Weekday","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()