window.BENCHMARK_DATA = {
  "lastUpdate": 1674646548457,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "apbard@users.noreply.github.com",
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336ac407316319209ac3922c3846615967e73304",
          "message": "[Minor, Doc] Typo (#186)",
          "timestamp": "2023-01-25T11:06:43Z",
          "tree_id": "521e651bea1baa188fb7dabf8a14cd84c43fe7d5",
          "url": "https://github.com/pytorch-labs/tensordict/commit/336ac407316319209ac3922c3846615967e73304"
        },
        "date": 1674645262239,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 742.8607156054264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3461473719000026 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 184227.14602838308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.428081700000575 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 87679.63859153553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.405156500001112 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 34441.82107216351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.034469399999807 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 49288.08681705209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.288878400003796 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 28455.456407605634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.142644900003006 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 23272.450724925726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.969260600000325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 25083.035822400445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.8675824999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3443.7363833931413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 290.3822734000016 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 24049.045141680956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.581692500000145 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 16022.124888170314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.41369399999712 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 18121.70295775113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.182451799998944 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 11833.565707485259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.50538280000046 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 26852.127436733943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.24099709999109 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 17635.784660609348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.7028923999942 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 28731.624204894983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.80485449999833 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 98393.24132111148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.163299699991057 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 28116.030019933016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.56689900000265 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6433.377676825784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.4393430999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 23036.291435725732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.409765100000186 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 6958.586602284248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.70734420000417 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 13071.880148677228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.50008940000816 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 6067.844145496066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.80317819999755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 11904.620182424329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.00100000471866 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 955.9505975513677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0460791620000691 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 14022.455504155503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.31418599999506 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1848.3511644256805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 541.0227338000027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1766.995834324655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 565.9322905999943 usec\nrounds: 1"
          }
        ]
      }
    ],
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c3d61300cbe78ced72c355695e82bae356b8d0c",
          "message": "[Refactor] Generate test_tensorclass.py from test_tensorclass_nofuture.py (#187)",
          "timestamp": "2023-01-25T11:32:46Z",
          "tree_id": "46cb28238d63bcb5c17f625bd3a99fa9b06c306c",
          "url": "https://github.com/pytorch-labs/tensordict/commit/3c3d61300cbe78ced72c355695e82bae356b8d0c"
        },
        "date": 1674646547672,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1055.2859502508998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 947.6104554999949 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 178592.72575413637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.599332199994933 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93715.43891758006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.670600399998875 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 35863.619005968365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.88341020000189 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50657.9484742605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.740238800000043 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38622.81083059971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.891435099998716 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31089.133843146068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.16557929999908 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 33020.275476075774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.284423299997343 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6250.9474404762595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.97574919999806 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 29999.16089347039,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.33426570000029 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19540.784834362254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.17501720000064 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24110.07553353867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.476435800001354 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14479.497726959236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.06316909999646 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29034.69462799033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.441553900001054 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20603.268735781374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.5359877999997 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31435.069551431938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.81160449999538 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 112225.31269533513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.910645700001396 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30613.412456026366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.665420799997946 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7058.704567817899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.66905420000262 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25767.4804764487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.80860610000241 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9122.599092704731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.61788299999853 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23179.993703478387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.14065020000157 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 8932.611289758523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.94934689999627 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12722.484449312684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.6009999842463 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1203.8939352203147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 830.6379580000112 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13831.803307669368,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.29715299996542 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2544.1675850352744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.05586859999835 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2502.168670246748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 399.6533134999993 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}